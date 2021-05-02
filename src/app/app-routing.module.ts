import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScriptAddComponent} from './script-add/script-add.component'
import {ScriptGetComponent} from './script-get/script-get.component'
import {ScriptEditComponent} from './script-edit/script-edit.component'
import {NotFoundComponent} from './not-found/not-found.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'script/create',
    component: ScriptAddComponent
  },
  {
    path: 'script',
    component: ScriptGetComponent
  },
  {
    path: 'script/edit',
    component: ScriptEditComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
