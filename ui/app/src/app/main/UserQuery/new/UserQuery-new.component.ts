import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserQuery-new',
  templateUrl: './UserQuery-new.component.html',
  styleUrls: ['./UserQuery-new.component.scss']
})
export class UserQueryNewComponent {
  @ViewChild("UserQueryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}