import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CompanySectorLink-card.component.html',
  styleUrls: ['./CompanySectorLink-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CompanySectorLink-card]': 'true'
  }
})

export class CompanySectorLinkCardComponent {


}