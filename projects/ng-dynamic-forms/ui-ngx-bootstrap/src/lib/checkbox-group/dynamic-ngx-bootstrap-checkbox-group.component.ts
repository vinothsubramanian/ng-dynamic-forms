import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
    DynamicCheckboxModel,
    DynamicCheckboxGroupModel,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicFormControlComponent
} from "@ng-dynamic-forms/core";

@Component({
    selector: "dynamic-ngx-bootstrap-checkbox-group",
    templateUrl: "./dynamic-ngx-bootstrap-checkbox-group.component.html"
})
export class DynamicNGxBootstrapCheckboxGroupComponent extends DynamicFormControlComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicCheckboxGroupModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }

    getCheckboxElementId(model: DynamicCheckboxModel) {
        return this.layoutService.getElementId(model);
    }
}
