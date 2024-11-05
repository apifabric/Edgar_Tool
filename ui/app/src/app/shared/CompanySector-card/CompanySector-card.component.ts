import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CompanySector-card.component.html',
  styleUrls: ['./CompanySector-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CompanySector-card]': 'true'
  }
})

export class CompanySectorCardComponent {


}