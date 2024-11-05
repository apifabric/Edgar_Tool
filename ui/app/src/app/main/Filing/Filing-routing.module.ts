import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilingHomeComponent } from './home/Filing-home.component';
import { FilingNewComponent } from './new/Filing-new.component';
import { FilingDetailComponent } from './detail/Filing-detail.component';

const routes: Routes = [
  {path: '', component: FilingHomeComponent},
  { path: 'new', component: FilingNewComponent },
  { path: ':id', component: FilingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Filing-detail-permissions'
      }
    }
  },{
    path: ':filing_id/FilingDateLog', loadChildren: () => import('../FilingDateLog/FilingDateLog.module').then(m => m.FilingDateLogModule),
    data: {
        oPermission: {
            permissionId: 'FilingDateLog-detail-permissions'
        }
    }
},{
    path: ':filing_id/FilingDocument', loadChildren: () => import('../FilingDocument/FilingDocument.module').then(m => m.FilingDocumentModule),
    data: {
        oPermission: {
            permissionId: 'FilingDocument-detail-permissions'
        }
    }
},{
    path: ':filing_id/FilingItem', loadChildren: () => import('../FilingItem/FilingItem.module').then(m => m.FilingItemModule),
    data: {
        oPermission: {
            permissionId: 'FilingItem-detail-permissions'
        }
    }
},{
    path: ':filing_id/NotificationLog', loadChildren: () => import('../NotificationLog/NotificationLog.module').then(m => m.NotificationLogModule),
    data: {
        oPermission: {
            permissionId: 'NotificationLog-detail-permissions'
        }
    }
},{
    path: ':filing_id/UserBookmark', loadChildren: () => import('../UserBookmark/UserBookmark.module').then(m => m.UserBookmarkModule),
    data: {
        oPermission: {
            permissionId: 'UserBookmark-detail-permissions'
        }
    }
}
];

export const FILING_MODULE_DECLARATIONS = [
    FilingHomeComponent,
    FilingNewComponent,
    FilingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilingRoutingModule { }