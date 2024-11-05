import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COMPANYSECTORLINK_MODULE_DECLARATIONS, CompanySectorLinkRoutingModule} from  './CompanySectorLink-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CompanySectorLinkRoutingModule
  ],
  declarations: COMPANYSECTORLINK_MODULE_DECLARATIONS,
  exports: COMPANYSECTORLINK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanySectorLinkModule { }