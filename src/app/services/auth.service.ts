import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JWTdto } from '../model/JWTdto.model';
import { NewUser } from '../model/NewUser.model';
import { UserLogin } from '../model/UserLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://web-production-0d34.up.railway.app/auth';
  /*authURL = 'http://localhost:8080/auth';*/

  constructor(private http: HttpClient) { }

  public new(newUser: NewUser): Observable<any>{
    return this.http.post<any>(this.authURL + '/new/user', newUser);
  } 
  
  public login(userLogin: UserLogin):Observable<JWTdto>{
    return this.http.post<JWTdto>(this.authURL + '/login', userLogin);
  }
  
}
