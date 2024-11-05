import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FilingDateLog-card.component.html',
  styleUrls: ['./FilingDateLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FilingDateLog-card]': 'true'
  }
})

export class FilingDateLogCardComponent {


}