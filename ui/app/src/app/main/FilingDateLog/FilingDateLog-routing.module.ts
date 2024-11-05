import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilingDateLogHomeComponent } from './home/FilingDateLog-home.component';
import { FilingDateLogNewComponent } from './new/FilingDateLog-new.component';
import { FilingDateLogDetailComponent } from './detail/FilingDateLog-detail.component';

const routes: Routes = [
  {path: '', component: FilingDateLogHomeComponent},
  { path: 'new', component: FilingDateLogNewComponent },
  { path: ':id', component: FilingDateLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FilingDateLog-detail-permissions'
      }
    }
  }
];

export const FILINGDATELOG_MODULE_DECLARATIONS = [
    FilingDateLogHomeComponent,
    FilingDateLogNewComponent,
    FilingDateLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilingDateLogRoutingModule { }