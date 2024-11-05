import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationLogHomeComponent } from './home/NotificationLog-home.component';
import { NotificationLogNewComponent } from './new/NotificationLog-new.component';
import { NotificationLogDetailComponent } from './detail/NotificationLog-detail.component';

const routes: Routes = [
  {path: '', component: NotificationLogHomeComponent},
  { path: 'new', component: NotificationLogNewComponent },
  { path: ':id', component: NotificationLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'NotificationLog-detail-permissions'
      }
    }
  }
];

export const NOTIFICATIONLOG_MODULE_DECLARATIONS = [
    NotificationLogHomeComponent,
    NotificationLogNewComponent,
    NotificationLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationLogRoutingModule { }