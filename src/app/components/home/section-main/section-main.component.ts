import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { About } from 'src/app/model/About.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'


@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {

  public aboutList!: About[];
  private about!: About;
  public editForm!: FormGroup;
  public  open = false;

  constructor(private portfolioData:PortfolioDataService) {
  
  }

  ngOnInit(): void {
    this.cargarAbout();

    //almacena los datos del formulario
    this.editForm = new FormGroup({ nombre: new FormControl(''),
                                    provincia: new FormControl(''),
                                    país: new FormControl(''),
                                    título: new FormControl(''),
                                    descripción: new FormControl('')
    });
    
    
  }

  cargarAbout(){
    this.aboutList = [];
    this.portfolioData.getAboutList().subscribe((aboutResponse: About[]) =>{
      this.aboutList = aboutResponse;
    })
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

    this.about = new About(2, form.value.nombre, form.value.provincia, form.value.país, form.value.título, form.value.descripción, "");
   
    this.portfolioData.editAboutData(this.about).subscribe(data =>{

      console.log("datos editados:" + JSON.stringify(data));
      this.cargarAbout();
    });
  

  }

}
