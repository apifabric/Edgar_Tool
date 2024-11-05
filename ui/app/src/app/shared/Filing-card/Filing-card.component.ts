import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Filing-card.component.html',
  styleUrls: ['./Filing-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Filing-card]': 'true'
  }
})

export class FilingCardComponent {


}