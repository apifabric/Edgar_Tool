import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySectorLinkHomeComponent } from './home/CompanySectorLink-home.component';
import { CompanySectorLinkNewComponent } from './new/CompanySectorLink-new.component';
import { CompanySectorLinkDetailComponent } from './detail/CompanySectorLink-detail.component';

const routes: Routes = [
  {path: '', component: CompanySectorLinkHomeComponent},
  { path: 'new', component: CompanySectorLinkNewComponent },
  { path: ':id', component: CompanySectorLinkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CompanySectorLink-detail-permissions'
      }
    }
  }
];

export const COMPANYSECTORLINK_MODULE_DECLARATIONS = [
    CompanySectorLinkHomeComponent,
    CompanySectorLinkNewComponent,
    CompanySectorLinkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanySectorLinkRoutingModule { }