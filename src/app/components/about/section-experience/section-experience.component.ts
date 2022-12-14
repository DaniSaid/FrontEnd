import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Experience } from 'src/app/model/Experience.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss'],
  animations:[
    /*animacion hecha para los formularios*/
    trigger('showTrigger', [
      transition(':enter',[
        style({ scale: 0.8}),
        animate('150ms', style({ scale: 1 }))
      ])
    ])
  ]
})
export class SectionExperienceComponent implements OnInit {

experienceList: Experience[] = [];
experience!: Experience;

public image : string = " /assets/images/work-desk.jpg";
public modalAdd : boolean = false;
public modalEdit: boolean = false;
public modalDelete: boolean = false;
private deleteId!: number;
public addForm!: FormGroup;
public editForm!: FormGroup;

  constructor(private portfolioService: PortfolioDataService, private formBuilder: FormBuilder, public http: HttpClient, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;

    }

    this.getExperiences();

    this.editForm = this.formBuilder.group({
      id:[''],
      puesto: [''],
      detalle: [''],
      tipo: [''],
      nombreEmpresa: [''],
      fechaIni: [''],
      fechaFin: ['']
    });
  }

  ngOnChanges(): void{
    this.getExperiences();
  }

  //obtengo mi lista de experiencias del back
  getExperiences(): void {
    this.portfolioService.getExperienceList().subscribe((expResponse: Experience[]) => {
      this.experienceList = expResponse;
    });
  }

  //métodos para agregar una nueva experiencia a la lista
  add(): void{
    this.modalAdd = true;
  }
  submit(add: NgForm){
    this.portfolioService.saveExperience(add.value).subscribe((expResponse: Experience)=>{
      console.log("exp agregada:" + JSON.stringify(expResponse));
      this.getExperiences();
    });
    this.closeAdd();
  }
  closeAdd(): void{
    this.modalAdd = false;
  }
 
  //métodos para editar experiencia
  edit(exp: Experience): void{
    this.modalEdit = true;
    var expId = exp.id;
    this.editForm.patchValue({
      id: expId,
      puesto: exp.puesto,
      detalle: exp.detalle,
      tipo: exp.tipo,
      nombreEmpresa: exp.nombreEmpresa,
      fechaIni: exp.fechaIni,
      fechaFin: exp.fechaFin
    });

    this.getExperiences();
  }
  onEdit(): void{
    this.portfolioService.updateExperience(this.editForm.value).subscribe(data =>{

      console.log("datos editados:" + JSON.stringify(data));
      this.getExperiences();
    });
    this.closeEdit();
  }
  closeEdit(): void{
    this.modalEdit = false;
  }

  //métodos para borrar experiencia
  delete(exp: Experience): void{
    this.modalDelete = true;
    this.deleteId = exp.id;
  }

  onDelete(): void{
    this.portfolioService.deleteExperience(this.deleteId).subscribe(data =>{
      console.log("datos borrados:" + JSON.stringify(data));
      this.getExperiences();
    });
    this.closeDelete();
  }

  closeDelete(): void{
    this.modalDelete = false;
  }


}