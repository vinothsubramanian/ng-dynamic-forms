import { inject, TestBed } from "@angular/core/testing";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicInputModel } from "../model/input/dynamic-input.model";
import { DynamicFormInstancesService } from "./dynamic-form-instances.service";
import { ChangeDetectorRef, ComponentRef, ElementRef, Injector, Type, ViewRef } from "@angular/core";
import { DynamicFormInstancesExplicitService } from "./dynamic-form-instances-explicit.service";

export class TestComponentRef extends ComponentRef<any> {

    readonly changeDetectorRef: ChangeDetectorRef;
    readonly componentType: Type<any>;
    readonly hostView: ViewRef;
    readonly injector: Injector;
    readonly instance: any;
    readonly location: ElementRef;

    destroy(): void {}

    onDestroy(): void {}

    constructor() {
        super();
    }
}

describe("DynamicFormInstanceService test suite", () => {

    let service: DynamicFormInstancesService;
    let model: DynamicFormControlModel;
    let componentRef: TestComponentRef;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                {provide: DynamicFormInstancesService, useClass: DynamicFormInstancesExplicitService}
            ]
        });

        model = new DynamicInputModel({id: "test"});
        componentRef = new TestComponentRef();
    });

    beforeEach(inject([DynamicFormInstancesService],
        (instanceService: DynamicFormInstancesService) => service = instanceService));


    it("should be empty when nothing set", () => {
        expect(service.getFormControlInstance(model.id)).toBeUndefined();
    });

    it("should have this reference when set", () => {

        service.setFormControlInstance(model, componentRef);

        expect(service.getFormControlInstance(model.id)).toBe(componentRef);
    });

    it("should not have this reference at the given index", () => {

        service.setFormControlInstance(model, componentRef);

        expect(service.getFormControlInstance(model.id, 0)).toBeUndefined();
    });

    it("should have this reference after set to index", () => {

        service.setFormControlInstance(model, componentRef, 0);

        expect(service.getFormControlInstance(model.id, 0)).toBe(componentRef);
    });

    it("should still have this reference at the given index, when deleting the first one", () => {

        service.setFormControlInstance(model, componentRef, 0);
        service.setFormControlInstance(model, componentRef, 1);
        service.removeFormControlInstance(model.id, 0);

        expect(service.getFormControlInstance(model.id, 0)).toBeDefined();
    });

    it("should no more have this reference at the given index, when deleting the first one two times", () => {

        service.setFormControlInstance(model, componentRef, 0);
        service.setFormControlInstance(model, componentRef, 1);
        service.removeFormControlInstance(model.id, 0);
        service.removeFormControlInstance(model.id, 0);

        expect(service.getFormControlInstance(model.id, 0)).toBeUndefined();
    });

    it("should no more have this reference, when deleted", () => {

        service.setFormControlInstance(model, componentRef);
        service.removeFormControlInstance(model.id);

        expect(service.getFormControlInstance(model.id)).toBeUndefined();
    });
    /*
    it("should throw exception when trying to delete non existent objects", () => {

        const modelId: string = model.id;
        const index: number = 0;

        expect(() => service.removeFormControlInstance(modelId)).toThrowError(`There exists no form control with id: ${modelId}`);

        expect(() => service.removeFormControlInstance(modelId, 0)).toThrowError(`There exists no form control with id: ${modelId} and/or index ${index}`);
    });
     */
});
