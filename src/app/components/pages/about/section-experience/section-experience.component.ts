import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Experience } from 'src/app/model/Experience.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss']
})
export class SectionExperienceComponent implements OnInit {

experienceList: Experience[] = [];
experience!: Experience;

public image : string = " /assets/images/work-desk.jpg";
public addOpen : boolean = false;
public editOpen: boolean = false;
public addForm!: FormGroup;
public editForm!: FormGroup;

  constructor(private portfolioService: PortfolioDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getExperience();

    this.addForm = new FormGroup({
      puesto: new FormControl(''),
      detalle: new FormControl(''),
      tipo: new FormControl(''),
      nombreEmpresa: new FormControl(''),
      fechaIni: new FormControl(''),
      fechaFin: new FormControl('')
    });

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

  openCreate(): void {
    this.addOpen = true;
  }

  closeCreate(): void {
    this.addOpen = false;
  }

  getExperience(): void {
    this.portfolioService.traerExperiencias().subscribe(data => {
      this.experienceList = data
    });
  }

  crearExperiencia(addForm: FormGroup): void {
    const experience = new Experience(0,'','','','', 0, 0);
    experience.puesto = addForm.value.puesto;
    experience.detalle = addForm.value.detalle;
    experience.tipo = addForm.value.tipo;
    experience.nombreEmpresa = addForm.value.nombreEmpresa;
    experience.fechaIni = addForm.value.fechaIni;
    experience.fechaFin = addForm.value.fechaFin;
    this.portfolioService.saveExperience(experience)
  }

  openEdit(exp: Experience): void{
    this.editOpen = true;
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
  }
  
  closeEdit(): void{
    this.editOpen = false;
  }

  editar(): void{
    this.portfolioService.updateExperience(this.editForm.value).subscribe(data =>{

      console.log("datos editados:" + JSON.stringify(data));
      
    });
  }

}