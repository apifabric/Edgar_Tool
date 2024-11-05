import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FORMTYPE_MODULE_DECLARATIONS, FormTypeRoutingModule} from  './FormType-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FormTypeRoutingModule
  ],
  declarations: FORMTYPE_MODULE_DECLARATIONS,
  exports: FORMTYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormTypeModule { }