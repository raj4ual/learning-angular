import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { BindingdemoComponent } from './bindingdemo/bindingdemo.component';
import { AuthGuard } from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'contacts',component:NewContactComponent, canActivate:[AuthGuard]},
  {path:'demobind',component:BindingdemoComponent},
  {path: '', redirectTo: 'login',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
