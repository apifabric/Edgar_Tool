import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserQuery-card.component.html',
  styleUrls: ['./UserQuery-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserQuery-card]': 'true'
  }
})

export class UserQueryCardComponent {


}