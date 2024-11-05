import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FILINGITEM_MODULE_DECLARATIONS, FilingItemRoutingModule} from  './FilingItem-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FilingItemRoutingModule
  ],
  declarations: FILINGITEM_MODULE_DECLARATIONS,
  exports: FILINGITEM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilingItemModule { }