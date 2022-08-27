import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  form: FormGroup;

   //el formulario login por default no se muestra
  buttonOpen: boolean = false;

  constructor(private router: Router,private authService: AuthService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      user:['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.minLength(7)]],
      password:['',[Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  open(){
    this.buttonOpen = true;
  }
  login(event: Event){
    event.preventDefault;
    this.authService.login(this.form.value.user, this.form.value.password);
    this.router.navigate(['/'])
  }

  close(){
    this.buttonOpen = false;
  }

  //getters para obtener los valores del formulario
  get user(){
    return this.form.get('user');
  }
  get password(){
    return this.form.get('password');
  }

}
