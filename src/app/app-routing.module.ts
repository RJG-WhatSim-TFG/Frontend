import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import {AuthRedirectersService} from './services/auth-redirecters.service'

import { HomeComponent } from './components/home/home.component';
import {SignupComponent} from './components/signup/signup.component'
import {SigninComponent} from './components/signin/signin.component'
import {ProfileComponent} from './components/profile/profile.component'
import {ErrorpageComponent} from './components/error/errorpage.component'
import {ChatlistComponent} from './components/chat/chatlist/chatlist.component'
import {ChatdetailComponent} from './components/chat/chatdetail/chatdetail.component'

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', redirectTo:'/'},
  { path: 'signup', component: SignupComponent },
  {path:'signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthRedirectersService]},
  {path: 'chats', component: ChatlistComponent, canActivate: [AuthRedirectersService]},
  {path: 'chats/:id', component: ChatdetailComponent, canActivate: [AuthRedirectersService]},
  {path: '404', component: ErrorpageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
