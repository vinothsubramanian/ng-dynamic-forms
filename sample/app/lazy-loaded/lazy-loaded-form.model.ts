import { DynamicInputModel } from "@ss-dynamic-forms/core";

export const LAZY_LOADED_FORM_MODEL = [

    new DynamicInputModel({

        id: "asyncInput",
        label: "Sample Async Input",
        validators: {
            //customLazyLoadedValidator: null
        },
        errorMessages: {
            //customLazyLoadedValidator: "Lazy invalid"
        }
    })
];
