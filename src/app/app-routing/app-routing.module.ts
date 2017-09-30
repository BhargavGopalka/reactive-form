import { NgModule } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {AnotherFormComponent} from "../another-form/another-form.component";
import {StructuralDirectivesComponent} from "../structural-directives/structural-directives.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'anotherForm',
    pathMatch: 'full'
  },
  {
    path: 'structural',
    component: StructuralDirectivesComponent
  },
  {
    path: 'form1',
    component: AppComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'anotherForm',
    component: AnotherFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
