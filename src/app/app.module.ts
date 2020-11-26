import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NewContactComponent } from './new-contact/new-contact.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BindingdemoComponent } from './bindingdemo/bindingdemo.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import {HttpClientModule} from '@angular/common/http';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//const routes: Routes=[
//  {path:'login',component:LoginComponent},
// {path:'contacts',component:NewContactComponent},
//  {path:'demobind',component:BindingdemoComponent},
//  {path: '', redirectTo: 'login',pathMatch:'full'}
//];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewContactComponent,
    BindingdemoComponent,
    FormsdemoComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
   // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
