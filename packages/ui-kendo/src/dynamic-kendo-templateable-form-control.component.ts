import { TemplateRef } from "@angular/core";
import { DynamicTemplateableFormControlComponent, DynamicTemplateDirective } from "@ss-dynamic-forms/core";

export abstract class DynamicKendoTemplateableFormControlComponent extends DynamicTemplateableFormControlComponent {

    mapTemplate(template: DynamicTemplateDirective): DynamicTemplateDirective | TemplateRef<any> {
        return template;
    }
}