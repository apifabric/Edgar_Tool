import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'FilingDateLog-new',
  templateUrl: './FilingDateLog-new.component.html',
  styleUrls: ['./FilingDateLog-new.component.scss']
})
export class FilingDateLogNewComponent {
  @ViewChild("FilingDateLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}