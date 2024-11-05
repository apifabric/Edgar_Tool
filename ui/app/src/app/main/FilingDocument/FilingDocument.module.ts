import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FILINGDOCUMENT_MODULE_DECLARATIONS, FilingDocumentRoutingModule} from  './FilingDocument-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FilingDocumentRoutingModule
  ],
  declarations: FILINGDOCUMENT_MODULE_DECLARATIONS,
  exports: FILINGDOCUMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilingDocumentModule { }