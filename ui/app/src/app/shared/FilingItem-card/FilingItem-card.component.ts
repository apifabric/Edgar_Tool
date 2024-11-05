import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FilingItem-card.component.html',
  styleUrls: ['./FilingItem-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FilingItem-card]': 'true'
  }
})

export class FilingItemCardComponent {


}