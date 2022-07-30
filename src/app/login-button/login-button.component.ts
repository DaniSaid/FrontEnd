import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //el formulario login por default no se muestra
  buttonOpen: boolean = false;
  open(){
    this.buttonOpen = true;
  }
  close(){
    this.buttonOpen = false;
  }

}
