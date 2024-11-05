import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FilingDocument-card.component.html',
  styleUrls: ['./FilingDocument-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FilingDocument-card]': 'true'
  }
})

export class FilingDocumentCardComponent {


}