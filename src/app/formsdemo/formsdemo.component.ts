import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsdemo',
  templateUrl: './formsdemo.component.html',
  styleUrls: ['./formsdemo.component.css']
})
export class FormsdemoComponent implements OnInit {

  public contact;
  constructor() { 
    this.contact={
      name:'',
      email:'',
      phone:''
    }
  }

  ngOnInit() {
  }

  addContact(){
    console.log("executed");
    console.log(this.contact);
  }
}
