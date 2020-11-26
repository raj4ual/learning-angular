import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 // private contact_api_endpoint =  'http://localhost:3000/contacts';
  private contact_api_endpoint1 ='http://localhost:3000/api/v1/contacts'; 

  constructor(private httpClient :HttpClient, private authService : AuthenticationService) {}
   
    getContacts():Observable<Contact[]>{
      return this.httpClient.get<Contact[]>(this.contact_api_endpoint1,{
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
      });
    }
  
    addContact(newContact:Contact):Observable<Contact>{
     return this.httpClient.post<Contact>(this.contact_api_endpoint1,newContact,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
    });
    }
   // deleteContact(newContact:Contact):Observable<Contact>{
     // return this.httpClient.delete<Contact>(this.contact_api_endpoint,newContact);
   // }
}
