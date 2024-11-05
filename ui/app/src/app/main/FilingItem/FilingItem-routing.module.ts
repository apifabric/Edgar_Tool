import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilingItemHomeComponent } from './home/FilingItem-home.component';
import { FilingItemNewComponent } from './new/FilingItem-new.component';
import { FilingItemDetailComponent } from './detail/FilingItem-detail.component';

const routes: Routes = [
  {path: '', component: FilingItemHomeComponent},
  { path: 'new', component: FilingItemNewComponent },
  { path: ':id', component: FilingItemDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FilingItem-detail-permissions'
      }
    }
  }
];

export const FILINGITEM_MODULE_DECLARATIONS = [
    FilingItemHomeComponent,
    FilingItemNewComponent,
    FilingItemDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilingItemRoutingModule { }