import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Company', loadChildren: () => import('./Company/Company.module').then(m => m.CompanyModule) },
    
        { path: 'CompanySector', loadChildren: () => import('./CompanySector/CompanySector.module').then(m => m.CompanySectorModule) },
    
        { path: 'CompanySectorLink', loadChildren: () => import('./CompanySectorLink/CompanySectorLink.module').then(m => m.CompanySectorLinkModule) },
    
        { path: 'Filing', loadChildren: () => import('./Filing/Filing.module').then(m => m.FilingModule) },
    
        { path: 'FilingDateLog', loadChildren: () => import('./FilingDateLog/FilingDateLog.module').then(m => m.FilingDateLogModule) },
    
        { path: 'FilingDocument', loadChildren: () => import('./FilingDocument/FilingDocument.module').then(m => m.FilingDocumentModule) },
    
        { path: 'FilingItem', loadChildren: () => import('./FilingItem/FilingItem.module').then(m => m.FilingItemModule) },
    
        { path: 'FormType', loadChildren: () => import('./FormType/FormType.module').then(m => m.FormTypeModule) },
    
        { path: 'NotificationLog', loadChildren: () => import('./NotificationLog/NotificationLog.module').then(m => m.NotificationLogModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserBookmark', loadChildren: () => import('./UserBookmark/UserBookmark.module').then(m => m.UserBookmarkModule) },
    
        { path: 'UserQuery', loadChildren: () => import('./UserQuery/UserQuery.module').then(m => m.UserQueryModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }