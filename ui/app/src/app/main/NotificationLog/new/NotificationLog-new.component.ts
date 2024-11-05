import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'NotificationLog-new',
  templateUrl: './NotificationLog-new.component.html',
  styleUrls: ['./NotificationLog-new.component.scss']
})
export class NotificationLogNewComponent {
  @ViewChild("NotificationLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}