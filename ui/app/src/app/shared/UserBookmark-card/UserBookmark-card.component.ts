import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserBookmark-card.component.html',
  styleUrls: ['./UserBookmark-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserBookmark-card]': 'true'
  }
})

export class UserBookmarkCardComponent {


}