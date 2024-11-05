import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERQUERY_MODULE_DECLARATIONS, UserQueryRoutingModule} from  './UserQuery-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserQueryRoutingModule
  ],
  declarations: USERQUERY_MODULE_DECLARATIONS,
  exports: USERQUERY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserQueryModule { }