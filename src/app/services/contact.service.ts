import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contact_api_endpoint =  'http://localhost:3000/contacts';
  constructor(private httpClient :HttpClient) {}
   
    getContacts():Observable<Contact[]>{
      return this.httpClient.get<Contact[]>(this.contact_api_endpoint);
    }
  
    addContact(newContact:Contact):Observable<Contact>{
     return this.httpClient.post<Contact>(this.contact_api_endpoint,newContact);
    }
    deleteContact(contact:Contact):Observable<Contact>{
      return this.httpClient.delete(this.contact_api_endpoint,contact);
    }
}
