import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform:FormGroup;
  public message:String;

  constructor(private authService: AuthenticationService, private router: RouterService) {
    this.loginform=new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(4)]),
      password:new FormControl('')
    });
  }

  ngOnInit() {
  }
  get username(){
    return this.loginform.get('username');
  }
  get password(){
    return this.loginform.get('password');
  }
  login(){
    console.log(this.loginform.value);
    this.authService.authenticateUser(this.loginform.value).subscribe(
      data => {
        console.log(data);
        this.authService.setBearerToken(data['token']);
        //if authenticated, navigate to NewContactComponent
        //this.router.navigate(['contacts'])
        this.router.navigateToContacts();
      },
      err=>{
        if(err.status == 403){
          this.message=err.error.message;
        }else{
          this.message="Server error";
        }
       // this.message='sorry, credentials entered are wrong. Please check again.';
      }
    );
  }
}
