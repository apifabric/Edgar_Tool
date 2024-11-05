import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilingDocumentHomeComponent } from './home/FilingDocument-home.component';
import { FilingDocumentNewComponent } from './new/FilingDocument-new.component';
import { FilingDocumentDetailComponent } from './detail/FilingDocument-detail.component';

const routes: Routes = [
  {path: '', component: FilingDocumentHomeComponent},
  { path: 'new', component: FilingDocumentNewComponent },
  { path: ':id', component: FilingDocumentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FilingDocument-detail-permissions'
      }
    }
  }
];

export const FILINGDOCUMENT_MODULE_DECLARATIONS = [
    FilingDocumentHomeComponent,
    FilingDocumentNewComponent,
    FilingDocumentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilingDocumentRoutingModule { }