import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserQueryHomeComponent } from './home/UserQuery-home.component';
import { UserQueryNewComponent } from './new/UserQuery-new.component';
import { UserQueryDetailComponent } from './detail/UserQuery-detail.component';

const routes: Routes = [
  {path: '', component: UserQueryHomeComponent},
  { path: 'new', component: UserQueryNewComponent },
  { path: ':id', component: UserQueryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserQuery-detail-permissions'
      }
    }
  }
];

export const USERQUERY_MODULE_DECLARATIONS = [
    UserQueryHomeComponent,
    UserQueryNewComponent,
    UserQueryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserQueryRoutingModule { }