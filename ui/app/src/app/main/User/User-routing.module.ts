import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/NotificationLog', loadChildren: () => import('../NotificationLog/NotificationLog.module').then(m => m.NotificationLogModule),
    data: {
        oPermission: {
            permissionId: 'NotificationLog-detail-permissions'
        }
    }
},{
    path: ':user_id/UserBookmark', loadChildren: () => import('../UserBookmark/UserBookmark.module').then(m => m.UserBookmarkModule),
    data: {
        oPermission: {
            permissionId: 'UserBookmark-detail-permissions'
        }
    }
},{
    path: ':user_id/UserQuery', loadChildren: () => import('../UserQuery/UserQuery.module').then(m => m.UserQueryModule),
    data: {
        oPermission: {
            permissionId: 'UserQuery-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }