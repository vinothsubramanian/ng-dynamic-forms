import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input, Optional,
    Output,
    ViewChild
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
    LabelOptions,
    MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MAT_RIPPLE_GLOBAL_OPTIONS,
    MatAutocomplete,
    MatAutocompleteDefaultOptions,
    MatInput, RippleGlobalOptions
} from "@angular/material";
import {
    DynamicFormControlCustomEvent,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicInputModel
} from "@ng-dynamic-forms/core";
import { DynamicMaterialFormInputControlComponent } from "../dynamic-material-form-input-control.component";

@Component({
    selector: "dynamic-material-input",
    templateUrl: "./dynamic-material-input.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicMaterialInputComponent extends DynamicMaterialFormInputControlComponent {

    @Input() bindId: boolean = true;
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicInputModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("matAutocomplete") matAutocomplete: MatAutocomplete;
    @ViewChild(MatInput) matInput: MatInput;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService,
                @Inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS) private AUTOCOMPLETE_OPTIONS: MatAutocompleteDefaultOptions,
                @Inject(MAT_LABEL_GLOBAL_OPTIONS) @Optional() private LABEL_OPTIONS: LabelOptions,
                @Inject(MAT_RIPPLE_GLOBAL_OPTIONS) @Optional() private RIPPLE_OPTIONS: RippleGlobalOptions) {

        super(layoutService, validationService);
    }
}