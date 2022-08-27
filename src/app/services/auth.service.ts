import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://localhost:4200/';
  token = {user:"39056342", password:"DG2787"};
  loged = false;
  constructor(private router: Router) { }

  login(user: string, password: string){
    if(user == this.token.user && password == this.token.password){
      this.router.navigate(['/']);
      localStorage.setItem('auth_token', this.token.user + this.token.password); 
      return this.loged = true;
    }else 
      return this.loged = false;
  }

  logout(){
    localStorage.removeItem('token');
  }

  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }
  
}
