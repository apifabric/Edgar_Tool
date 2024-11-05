import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COMPANYSECTOR_MODULE_DECLARATIONS, CompanySectorRoutingModule} from  './CompanySector-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CompanySectorRoutingModule
  ],
  declarations: COMPANYSECTOR_MODULE_DECLARATIONS,
  exports: COMPANYSECTOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanySectorModule { }