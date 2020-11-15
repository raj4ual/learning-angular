import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  public newContact: Contact;
  public contacts : Array<Contact>;

  constructor(private cService: ContactService) {
    this.newContact= new Contact();
    this.contacts=[];
   }

  ngOnInit() {
    this.cService.getContacts().subscribe(apiContacts =>{
      this.contacts= apiContacts;
    });
  }

  addContact(){
    console.log(this.newContact);
   // this.contacts.push(this.newContact);
    this.cService.addContact(this.newContact).subscribe(() =>{
      this.contacts.push(this.newContact);
    });
    //this.newContact= new Contact();
    console.log(this.contacts);
  }
}
