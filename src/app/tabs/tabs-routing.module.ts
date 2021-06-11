 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'preferences1',
        loadChildren: () => import('../preferences1/preferences1.module').then(m => m.Preferences1PageModule)
      },
      {
        path: 'homepage',
        loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepagePageModule)
      },
      {
        path: 'preferences2',
        loadChildren: () => import('../preferences2/preferences2.module').then(m => m.Preferences2PageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'detailpage',
        loadChildren: () => import('../detailpage/detailpage.module').then(m => m.DetailpagePageModule)
      },
      {
        path: 'favo',
        loadChildren: () => import('../favo/favo.module').then(m => m.FavoPageModule)
      },
      {
        path: 'promotead',
        loadChildren: () => import('../promotead/promotead.module').then(m => m.PromoteadPageModule)
      },
      {
        path: 'promotead2',
        loadChildren: () => import('../promotead2/promotead2.module').then(m => m.Promotead2PageModule)
      },
      {
        path: 'promotead3',
        loadChildren: () => import('../promotead3/promotead3.module').then(m => m.Promotead3PageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../test-list-person/test-list-person.module').then( m => m.TestListPersonPageModule)
      },

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
