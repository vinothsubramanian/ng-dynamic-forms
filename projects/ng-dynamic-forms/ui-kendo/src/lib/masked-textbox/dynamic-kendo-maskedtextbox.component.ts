import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MaskedTextBoxComponent } from "@progress/kendo-angular-inputs";
import {
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicFormControlComponent,
    DynamicInputModel
} from "@ss-dynamic-forms/core";

@Component({
    selector: "dynamic-kendo-maskedtextbox",
    templateUrl: "./dynamic-kendo-maskedtextbox.component.html"
})
export class DynamicKendoMaskedTextBoxComponent extends DynamicFormControlComponent {

    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicInputModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("kendoMaskedTextBox", { static: true }) kendoMaskedTextBox: MaskedTextBoxComponent;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }
}
