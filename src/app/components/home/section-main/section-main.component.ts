import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { About } from 'src/app/model/About.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss'],
  animations:[
    //animacion hecha para los formularios
    trigger('showTrigger', [
      transition(':enter',[
        style({ scale: 0.8}),
        animate('150ms', style({ scale: 1 }))
      ])
    ])
  ]
})
export class SectionMainComponent implements OnInit {

  public aboutList!: About[];
  public editForm!: FormGroup;
  public  open = false;

  constructor(private portfolioService:PortfolioDataService, private fb: FormBuilder, private token: TokenService) {
  
  }

  isLogged = false;

  ngOnInit(): void {
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;

    }

    this.cargarAbout();

    //tomo los datos del formulario
    this.editForm = this.fb.group({ id: [''],
                                    nombre: [''],
                                    provincia: [''],
                                    pais: [''],
                                    titulo: [''],
                                    descripcion: ['']
    });
  }

  cargarAbout(){
    this.aboutList = [];
    this.portfolioService.getAboutList().subscribe((aboutResponse: About[]) =>{
      this.aboutList = aboutResponse;
    })
  }

  //métodos para formulario
  editOpen(a : About) : void {
    this.open = true;
    this.editForm.patchValue({
      id: a.id,
      nombre: a.nombre,
      provincia: a.provincia,
      pais: a.pais,
      titulo: a.titulo,
      descripcion: a.descripcion,
    });
    this.cargarAbout();
  }

  onEdit(): void{
    this.portfolioService.editAboutData(this.editForm.value).subscribe(data =>{
      console.log("datos editados:" + JSON.stringify(data));
      this.cargarAbout();
    });
  }

  editClose(){
    this.open = false;

  }

  submit(form: FormGroup){

    this.portfolioService.editAboutData(form.value).subscribe(data =>{

      console.log("datos editados:" + JSON.stringify(data));
      this.cargarAbout();
    });
  }


}
