import { NgModule } from "@angular/core";
//import { BaseRequestOptions, Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MAT_CHIPS_DEFAULT_OPTIONS } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
//import { MockBackend } from "@angular/http/testing";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, ReactiveFormsModule } from "@angular/forms";
import { NgbDatepickerModule, NgbRatingModule, NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { BsDatepickerModule, TimepickerModule } from "ngx-bootstrap";
import {
    DYNAMIC_VALIDATORS,
    DynamicFormsCoreModule,
    Validator,
    ValidatorFactory,
    DISABLED_MATCHER,
    HIDDEN_MATCHER,
    REQUIRED_MATCHER
} from "@ss-dynamic-forms/core";
import { DynamicFormsBasicUIModule } from "@ss-dynamic-forms/ui-basic";
import { DynamicFormsFoundationUIModule } from "@ss-dynamic-forms/ui-foundation";
import { DynamicFormsKendoUIModule } from "@ss-dynamic-forms/ui-kendo";
import { DynamicFormsMaterialUIModule } from "@ss-dynamic-forms/ui-material";
import { DynamicFormsNGBootstrapUIModule } from "@ss-dynamic-forms/ui-ng-bootstrap";
import { DynamicFormsNGxBootstrapUIModule } from "@ss-dynamic-forms/ui-ngx-bootstrap";
import { DynamicFormsPrimeNGUIModule } from "@ss-dynamic-forms/ui-primeng";

import { BasicSampleFormComponent } from "./ui-basic/basic-sample-form.component";
import { FoundationSampleFormComponent } from "./ui-foundation/foundation-sample-form.component";
import { KendoSampleFormComponent } from "./ui-kendo/kendo-sample-form.component";
import { MaterialSampleFormComponent } from "./ui-material/material-sample-form.component";
import { NGBootstrapSampleFormComponent } from "./ui-ng-bootstrap/ng-bootstrap-sample-form.component";
import { NgxBootstrapSampleFormComponent } from "./ui-ngx-bootstrap/ngx-bootstrap-sample-form.component";
import { PrimeNGSampleFormComponent } from "./ui-primeng/primeng-sample-form.component";

import { ValidationMessageComponent } from "./validation-message/validation-message.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    customAsyncFormGroupValidator,
    customDateRangeValidator,
    customForbiddenValidator,
    customValidator
} from "./app.validators";

/*
export function mockBackendFactory(mockBackend: MockBackend, baseRequestOptions: BaseRequestOptions) {
    return new Http(mockBackend, baseRequestOptions);
}
*/
@NgModule({

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatNativeDateModule,
        MatCardModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        NgbDatepickerModule,
        NgbRatingModule,
        NgbTimepickerModule,
        DynamicFormsCoreModule.forRoot(),
        DynamicFormsBasicUIModule,
        DynamicFormsFoundationUIModule,
        DynamicFormsKendoUIModule,
        DynamicFormsMaterialUIModule,
        DynamicFormsNGBootstrapUIModule,
        DynamicFormsNGxBootstrapUIModule,
        DynamicFormsPrimeNGUIModule
    ],
    declarations: [
        BasicSampleFormComponent,
        NgxBootstrapSampleFormComponent,
        FoundationSampleFormComponent,
        KendoSampleFormComponent,
        MaterialSampleFormComponent,
        NGBootstrapSampleFormComponent,
        PrimeNGSampleFormComponent,
        ValidationMessageComponent,
        AppComponent
    ],
    providers: [
        /*
        BaseRequestOptions,
        MockBackend,
        {
            provide: Http,
            deps: [MockBackend, BaseRequestOptions],
            useFactory: mockBackendFactory
        },
        */
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: NG_VALIDATORS,
            useValue: customValidator,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useValue: customDateRangeValidator,
            multi: true
        },
        {
            provide: NG_ASYNC_VALIDATORS,
            useValue: customAsyncFormGroupValidator,
            multi: true
        },
        {
            provide: DYNAMIC_VALIDATORS,
            useValue: new Map<string, Validator | ValidatorFactory>([
                ["customValidator", customValidator],
                ["customDateRangeValidator", customDateRangeValidator],
                ["customForbiddenValidator", customForbiddenValidator],
                ["customAsyncFormGroupValidator", customAsyncFormGroupValidator]
            ])
        },
        DISABLED_MATCHER,
        HIDDEN_MATCHER,
        REQUIRED_MATCHER,
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: [13, 188]
            }
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
