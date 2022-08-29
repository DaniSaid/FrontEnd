import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/UserLogin.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  isLogged = false;
  logginFail = false;
  loginUsuario!: UserLogin;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
 

   //el formulario login por default no se muestra
  buttonOpen: boolean = false;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
   
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }else{
      this.isLogged = false;
    }
  }

  open(){
    this.buttonOpen = true;
  }

  onLogin(): void {
    this.loginUsuario = new UserLogin(this.userName, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: (data) =>{
        this.isLogged = true;
        this.logginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.close();
      },
      error: (e) => {
        this.isLogged = false;
        this.logginFail = true;
        this.errMsj = e.error.mensaje;
      }
    })

  }

  close(){
    this.buttonOpen = false;
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
