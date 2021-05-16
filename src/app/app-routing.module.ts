import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'makeaccount1',
    loadChildren: () => import('./makeaccount1/makeaccount1.module').then( m => m.Makeaccount1PageModule)
  },
  {
    path: 'makeaccount2',
    loadChildren: () => import('./makeaccount2/makeaccount2.module').then( m => m.Makeaccount2PageModule)
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
    path: 'preferences5',
    loadChildren: () => import('./preferences5/preferences5.module').then( m => m.Preferences5PageModule)
  },
  {
    path: 'preferences6',
    loadChildren: () => import('./preferences6/preferences6.module').then( m => m.Preferences6PageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'welcome-option',
    loadChildren: () => import('./welcome-option/welcome-option.module').then( m => m.WelcomeOptionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-input',
    loadChildren: () => import('./login-input/login-input.module').then( m => m.LoginInputPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
