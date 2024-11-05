import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERBOOKMARK_MODULE_DECLARATIONS, UserBookmarkRoutingModule} from  './UserBookmark-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserBookmarkRoutingModule
  ],
  declarations: USERBOOKMARK_MODULE_DECLARATIONS,
  exports: USERBOOKMARK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserBookmarkModule { }