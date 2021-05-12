import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signin-option',
    loadChildren: () => import('./signin-option/signin-option.module').then( m => m.SigninOptionPageModule)
  },
  {
    path: 'makeaccount1',
    loadChildren: () => import('./makeaccount1/makeaccount1.module').then( m => m.Makeaccount1PageModule)
  },
  {
    path: 'makeaccount2',
    loadChildren: () => import('./makeaccount2/makeaccount2.module').then( m => m.Makeaccount2PageModule)
  },
  {
    path: 'makeaccount3',
    loadChildren: () => import('./makeaccount3/makeaccount3.module').then( m => m.Makeaccount3PageModule)
  },
  {
    path: 'makeaccount4',
    loadChildren: () => import('./makeaccount4/makeaccount4.module').then( m => m.Makeaccount4PageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'preferences1',
    loadChildren: () => import('./preferences1/preferences1.module').then( m => m.Preferences1PageModule)
  },
  {
    path: 'preferences2',
    loadChildren: () => import('./preferences2/preferences2.module').then( m => m.Preferences2PageModule)
  },
  {
    path: 'preferences3',
    loadChildren: () => import('./preferences3/preferences3.module').then( m => m.Preferences3PageModule)
  },
  {
    path: 'preferences4',
    loadChildren: () => import('./preferences4/preferences4.module').then( m => m.Preferences4PageModule)
  },
  {
    path: 'preferences5',
    loadChildren: () => import('./preferences5/preferences5.module').then( m => m.Preferences5PageModule)
  },
  {
    path: 'preferences6',
    loadChildren: () => import('./preferences6/preferences6.module').then( m => m.Preferences6PageModule)
  },
  {
    path: 'preferences7',
    loadChildren: () => import('./preferences7/preferences7.module').then( m => m.Preferences7PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
