import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  public newContact: Contact;
  public contacts : Array<Contact>;
  constructor() {
    this.newContact= new Contact();
    this.contacts=[];
   }

  ngOnInit() {
  }

  addContact(){
    console.log(this.newContact);
    this.contacts.push(this.newContact);
    this.newContact= new Contact();
    console.log(this.contacts);
  }
}
