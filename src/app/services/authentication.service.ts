import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private auth_endpoint='http://localhost:3000/auth/v1';
  
  constructor(private http: HttpClient) {}

  authenticateUser(user){
    return this.http.post(this.auth_endpoint,user);
  }
  setBearerToken(token){
    sessionStorage.setItem('token',token);
  }
  getBearerToken(){
    return sessionStorage.getItem('token');
  }

  isAuthenticated(){
    return this.http.post('http://localhost:3000/auth/v1/isAuthenticated',{}, {
      headers: new HttpHeaders().set('Authorization',`Bearer {this.getBearerToken()}`
    )});
  }
}
