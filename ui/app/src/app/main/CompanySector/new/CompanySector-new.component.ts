import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CompanySector-new',
  templateUrl: './CompanySector-new.component.html',
  styleUrls: ['./CompanySector-new.component.scss']
})
export class CompanySectorNewComponent {
  @ViewChild("CompanySectorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}