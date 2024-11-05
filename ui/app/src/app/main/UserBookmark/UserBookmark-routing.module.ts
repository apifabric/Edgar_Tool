import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBookmarkHomeComponent } from './home/UserBookmark-home.component';
import { UserBookmarkNewComponent } from './new/UserBookmark-new.component';
import { UserBookmarkDetailComponent } from './detail/UserBookmark-detail.component';

const routes: Routes = [
  {path: '', component: UserBookmarkHomeComponent},
  { path: 'new', component: UserBookmarkNewComponent },
  { path: ':id', component: UserBookmarkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserBookmark-detail-permissions'
      }
    }
  }
];

export const USERBOOKMARK_MODULE_DECLARATIONS = [
    UserBookmarkHomeComponent,
    UserBookmarkNewComponent,
    UserBookmarkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBookmarkRoutingModule { }