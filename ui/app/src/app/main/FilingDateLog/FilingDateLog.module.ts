import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FILINGDATELOG_MODULE_DECLARATIONS, FilingDateLogRoutingModule} from  './FilingDateLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FilingDateLogRoutingModule
  ],
  declarations: FILINGDATELOG_MODULE_DECLARATIONS,
  exports: FILINGDATELOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilingDateLogModule { }