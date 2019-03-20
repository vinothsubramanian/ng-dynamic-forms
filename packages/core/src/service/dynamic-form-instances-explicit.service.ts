import { ComponentRef, Injectable } from "@angular/core";
import { DynamicFormControl } from "../component/dynamic-form-control.interface";
import { DynamicFormControlModel } from "../model/dynamic-form-control.model";
import { DynamicFormInstancesService } from "./dynamic-form-instances.service";

@Injectable()
export class DynamicFormInstancesExplicitService implements DynamicFormInstancesService {

    protected formControlInstances: { [key: string]: ComponentRef<DynamicFormControl> | Array<ComponentRef<DynamicFormControl> | undefined> } = {};

    getFormControlInstance(modelId: string, index?: number): ComponentRef<DynamicFormControl> | undefined {

        const retInstance: ComponentRef<DynamicFormControl> | Array<ComponentRef<DynamicFormControl>> =
            this.formControlInstances[modelId] as ComponentRef<DynamicFormControl> | Array<ComponentRef<DynamicFormControl>>;

        if (Array.isArray(retInstance) && index !== undefined) {

            return retInstance[index];

        } else {
            return index !== undefined ? undefined : this.formControlInstances[modelId] as ComponentRef<DynamicFormControl>;
        }
    }

    setFormControlInstance(model: DynamicFormControlModel, instance: ComponentRef<DynamicFormControl>, index?: number): void {

        if (index !== undefined) {

            const arrayRef: Array<ComponentRef<DynamicFormControl>> =
                this.formControlInstances[model.id] as Array<ComponentRef<DynamicFormControl>> || [];
            /**
             * Use splice to add element
             */
            arrayRef.splice(index, 0, instance);
            this.formControlInstances[model.id] = arrayRef;

        } else {
            this.formControlInstances[model.id] = instance;
        }
    }

    removeFormControlInstance(modelId: string, index?: number): void | never {

        const instanceRef = this.formControlInstances[modelId];

        if (index !== undefined) {

            if (Array.isArray(instanceRef) && instanceRef[index]) {
                /**
                 * Use splice to remove elements
                 */
                instanceRef.splice(index, 1);
            } else {
                throw new Error(`There exists no control with id: ${modelId} and/or index ${index}`);
            }

        } else if (instanceRef) {
            delete this.formControlInstances[modelId];

        } else {
            throw new Error(`There exists no control with id: ${modelId}`);
        }
    }
}
