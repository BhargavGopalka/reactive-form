import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AnotherFormComponent } from './another-form/another-form.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { UnlessDirective } from "./unless.directive";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AnotherFormComponent,
    StructuralDirectivesComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
