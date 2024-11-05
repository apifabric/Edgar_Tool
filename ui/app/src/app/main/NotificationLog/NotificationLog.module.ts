import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {NOTIFICATIONLOG_MODULE_DECLARATIONS, NotificationLogRoutingModule} from  './NotificationLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    NotificationLogRoutingModule
  ],
  declarations: NOTIFICATIONLOG_MODULE_DECLARATIONS,
  exports: NOTIFICATIONLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationLogModule { }