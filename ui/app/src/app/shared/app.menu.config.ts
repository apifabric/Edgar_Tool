import { MenuRootItem } from 'ontimize-web-ngx';

import { CompanyCardComponent } from './Company-card/Company-card.component';

import { CompanySectorCardComponent } from './CompanySector-card/CompanySector-card.component';

import { CompanySectorLinkCardComponent } from './CompanySectorLink-card/CompanySectorLink-card.component';

import { FilingCardComponent } from './Filing-card/Filing-card.component';

import { FilingDateLogCardComponent } from './FilingDateLog-card/FilingDateLog-card.component';

import { FilingDocumentCardComponent } from './FilingDocument-card/FilingDocument-card.component';

import { FilingItemCardComponent } from './FilingItem-card/FilingItem-card.component';

import { FormTypeCardComponent } from './FormType-card/FormType-card.component';

import { NotificationLogCardComponent } from './NotificationLog-card/NotificationLog-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserBookmarkCardComponent } from './UserBookmark-card/UserBookmark-card.component';

import { UserQueryCardComponent } from './UserQuery-card/UserQuery-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Company', name: 'COMPANY', icon: 'view_list', route: '/main/Company' }
    
        ,{ id: 'CompanySector', name: 'COMPANYSECTOR', icon: 'view_list', route: '/main/CompanySector' }
    
        ,{ id: 'CompanySectorLink', name: 'COMPANYSECTORLINK', icon: 'view_list', route: '/main/CompanySectorLink' }
    
        ,{ id: 'Filing', name: 'FILING', icon: 'view_list', route: '/main/Filing' }
    
        ,{ id: 'FilingDateLog', name: 'FILINGDATELOG', icon: 'view_list', route: '/main/FilingDateLog' }
    
        ,{ id: 'FilingDocument', name: 'FILINGDOCUMENT', icon: 'view_list', route: '/main/FilingDocument' }
    
        ,{ id: 'FilingItem', name: 'FILINGITEM', icon: 'view_list', route: '/main/FilingItem' }
    
        ,{ id: 'FormType', name: 'FORMTYPE', icon: 'view_list', route: '/main/FormType' }
    
        ,{ id: 'NotificationLog', name: 'NOTIFICATIONLOG', icon: 'view_list', route: '/main/NotificationLog' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserBookmark', name: 'USERBOOKMARK', icon: 'view_list', route: '/main/UserBookmark' }
    
        ,{ id: 'UserQuery', name: 'USERQUERY', icon: 'view_list', route: '/main/UserQuery' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CompanyCardComponent

    ,CompanySectorCardComponent

    ,CompanySectorLinkCardComponent

    ,FilingCardComponent

    ,FilingDateLogCardComponent

    ,FilingDocumentCardComponent

    ,FilingItemCardComponent

    ,FormTypeCardComponent

    ,NotificationLogCardComponent

    ,UserCardComponent

    ,UserBookmarkCardComponent

    ,UserQueryCardComponent

];