import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform:FormGroup;
  constructor() {
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
    
  }
}
