import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSignUpComponent } from './login-page/user-sign-up/user-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
  { path: 'user-login', component: UserSignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }