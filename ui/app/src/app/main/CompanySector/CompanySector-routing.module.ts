import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySectorHomeComponent } from './home/CompanySector-home.component';
import { CompanySectorNewComponent } from './new/CompanySector-new.component';
import { CompanySectorDetailComponent } from './detail/CompanySector-detail.component';

const routes: Routes = [
  {path: '', component: CompanySectorHomeComponent},
  { path: 'new', component: CompanySectorNewComponent },
  { path: ':id', component: CompanySectorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CompanySector-detail-permissions'
      }
    }
  },{
    path: ':sector_id/CompanySectorLink', loadChildren: () => import('../CompanySectorLink/CompanySectorLink.module').then(m => m.CompanySectorLinkModule),
    data: {
        oPermission: {
            permissionId: 'CompanySectorLink-detail-permissions'
        }
    }
}
];

export const COMPANYSECTOR_MODULE_DECLARATIONS = [
    CompanySectorHomeComponent,
    CompanySectorNewComponent,
    CompanySectorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanySectorRoutingModule { }