import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private portfolioService: PortfolioDataService) { }

  ngOnInit(): void {
    this.cargarExperience();
    this.addForm = new FormGroup({
      puesto: new FormControl(''),
      detalle: new FormControl(''),
      tipo: new FormControl(''),
      nombreEmpresa: new FormControl(''),
      fechaIni: new FormControl(''),
      fechaFin: new FormControl('')
    });
    this.editForm = new FormGroup({
      puesto: new FormControl(''),
      detalle: new FormControl(''),
      tipo: new FormControl(''),
      nombreEmpresa: new FormControl(''),
      fechaIni: new FormControl(''),
      fechaFin: new FormControl('')
    });
  }

  openCreate(): void {
    this.addOpen = true;
  }

  closeCreate(): void {
    this.addOpen = false;
  }

  openEdit(exp: Experience): number{
    this.editOpen = true;
    var expId = exp.id;
    
    const experience = new Experience(expId,"","","","",0,0);
    return expId;
  }
  closeEdit(): void{
    this.editOpen = false;
  }

  cargarExperience(): void {
    this.portfolioService.getExperiencias().subscribe(data => {
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

  editarExperiencia(editForm: FormGroup): void {
    console.log("exp id:" + this.openEdit(this.experience))
    this.experience.id = this.openEdit(this.experience);
    this.experience.puesto = editForm.value.puesto;
    this.experience.detalle = editForm.value.detalle;
    this.experience.tipo = editForm.value.tipo;
    this.experience.nombreEmpresa = editForm.value.nombreEmpresa;
    this.experience.fechaIni = editForm.value.fechaIni;
    this.experience.fechaFin = editForm.value.fechaFin;
  }

}