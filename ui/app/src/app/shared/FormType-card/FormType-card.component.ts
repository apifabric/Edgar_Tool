import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FormType-card.component.html',
  styleUrls: ['./FormType-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FormType-card]': 'true'
  }
})

export class FormTypeCardComponent {


}