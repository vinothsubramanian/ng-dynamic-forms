import { DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX } from "@ss-dynamic-forms/core";

export const NGX_BOOTSTRAP_SAMPLE_FORM_LAYOUT = {

    "bsSelect, bsDatePicker, bsCheckboxGroup, bsRadioGroup, bsInput, bsInput2, bsTextArea, bsTimePicker": {
        element: {
            container: "form-group",
            label: "control-label",
            option: "btn-primary"
        },

        grid: {
            control: "col-sm-9",
            label: "col-sm-3",
            errors: "col-sm-offset-3 col-sm-9"
        }
    },

    "bsCheckbox": {
        element: {
            container: "form-group"
        },
        grid: {
            control: "col-sm-offset-3 col-sm-9"
        }
    },

    [DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX]: {
        element: {
            control: "btn-primary"
        },
    },

    [DYNAMIC_FORM_CONTROL_TYPE_ARRAY]: {
        element: {
            container: "form-group form-array",
            group: "d-flex"
        },
        grid: {
            children: "col-sm-8",
            label: "col-sm-3"
        }
    }
};
