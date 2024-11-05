import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTypeHomeComponent } from './home/FormType-home.component';
import { FormTypeNewComponent } from './new/FormType-new.component';
import { FormTypeDetailComponent } from './detail/FormType-detail.component';

const routes: Routes = [
  {path: '', component: FormTypeHomeComponent},
  { path: 'new', component: FormTypeNewComponent },
  { path: ':id', component: FormTypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FormType-detail-permissions'
      }
    }
  },{
    path: ':form_type_id/Filing', loadChildren: () => import('../Filing/Filing.module').then(m => m.FilingModule),
    data: {
        oPermission: {
            permissionId: 'Filing-detail-permissions'
        }
    }
},{
    path: ':form_type_id/UserQuery', loadChildren: () => import('../UserQuery/UserQuery.module').then(m => m.UserQueryModule),
    data: {
        oPermission: {
            permissionId: 'UserQuery-detail-permissions'
        }
    }
}
];

export const FORMTYPE_MODULE_DECLARATIONS = [
    FormTypeHomeComponent,
    FormTypeNewComponent,
    FormTypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTypeRoutingModule { }