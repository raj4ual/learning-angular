import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigateToLogin(){
    this.router.navigate(['login']);
  }
  navigateToContacts(){
    this.router.navigate(['contacts']);
  }
}
