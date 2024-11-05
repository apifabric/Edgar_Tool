import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './NotificationLog-card.component.html',
  styleUrls: ['./NotificationLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.NotificationLog-card]': 'true'
  }
})

export class NotificationLogCardComponent {


}