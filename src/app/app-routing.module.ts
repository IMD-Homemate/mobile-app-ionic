import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'ma1',
    loadChildren: () => import('./makeaccount1/makeaccount1.module').then( m => m.Makeaccount1PageModule)
  },
  {
    path: 'ma2',
    loadChildren: () => import('./makeaccount2/makeaccount2.module').then( m => m.Makeaccount2PageModule)
  },
  {
    path: 'ma3',
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
  },
  {
    path: 'detailpage',
    loadChildren: () => import('./detailpage/detailpage.module').then( m => m.DetailpagePageModule)
  },
  {
    path: 'add-person',
    loadChildren: () => import('./test-person/test-person.module').then( m => m.TestPersonPageModule)
  },
  // {
  //   path: 'test-list-person',
  //   loadChildren: () => import('./test-list-person/test-list-person.module').then( m => m.TestListPersonPageModule)
  // },
  {
    path: 'test-update-person/:id',
    loadChildren: () => import('./test-update-person/test-update-person.module').then( m => m.TestUpdatePersonPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {

    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'preferences-edit',
    loadChildren: () => import('./preferences-edit/preferences-edit.module').then( m => m.PreferencesEditPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'walkthrough2',
    loadChildren: () => import('./walkthrough2/walkthrough2.module').then( m => m.Walkthrough2PageModule)
  },
  {
    path: 'walkthrough3',
    loadChildren: () => import('./walkthrough3/walkthrough3.module').then( m => m.Walkthrough3PageModule)
  },
  {
    path: 'walkthrough4',
    loadChildren: () => import('./walkthrough4/walkthrough4.module').then( m => m.Walkthrough4PageModule)
  },
  {
    path: 'promotead',
    loadChildren: () => import('./promotead/promotead.module').then( m => m.PromoteadPageModule)
  },
  {
    path: 'promotead2',
    loadChildren: () => import('./promotead2/promotead2.module').then( m => m.Promotead2PageModule)
  },
  {
    path: 'promotead3',
    loadChildren: () => import('./promotead3/promotead3.module').then( m => m.Promotead3PageModule)
  },
  {
    path: 'person-detailpage',
    loadChildren: () => import('./person-detailpage/person-detailpage.module').then( m => m.PersonDetailpagePageModule)
  }
  // {
  //   path: 'favo',
  //   loadChildren: () => import('./favo/favo.module').then( m => m.FavoPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
