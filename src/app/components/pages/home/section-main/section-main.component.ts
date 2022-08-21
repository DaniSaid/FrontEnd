import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { About } from 'src/app/model/About.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'


@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {


  public aboutList!: About[];
  private about: About =  new About(2,"","","","","","");

  public editForm!: FormGroup;
  public  open = false;

  constructor(private portfolioData:PortfolioDataService, private formBuilder: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.cargarAbout();

    //almacena los datos del formulario
    this.editForm = new FormGroup({ nombre: new FormControl(''),
                                    provincia: new FormControl(''),
                                    país: new FormControl(''),
                                    título: new FormControl(''),
                                    descripción: new FormControl('')});

    
  }

  //métodos para formulario

  editOpen(){
    this.open = true;
  }

  editClose(){
    this.open = false;

  }

  //almacena los datos del formulario
  submit(form: FormGroup){
    console.log('nombre', form.value.nombre);
    console.log('provincia', form.value.provincia);
    console.log('país', form.value.país);
    console.log('título', form.value.título);
    console.log('descripción', form.value.descripción);
    
    for(let a of this.aboutList){  
        a.nombre = form.value.nombre;
        a.provincia = form.value.provincia;
        a.pais = form.value.país;
        a.titulo = form.value.título;
        a.descripcion = form.value.descripción;

    }

    this.about = new About(2, form.value.nombre, form.value.provincia, form.value.país, form.value.título, form.value.descripción, "");
   
    this.portfolioData.editAboutData(this.about).subscribe(data =>{

      console.log("datos editados:" + JSON.stringify(data));
      
    });
  

  }

  //--------------------------

  cargarAbout(){
    this.aboutList = [];
    this.portfolioData.getAboutList().subscribe((aboutResponse: About[]) =>{
      this.aboutList = aboutResponse;
    })
  }

}
