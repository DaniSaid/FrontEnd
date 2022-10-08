import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Project } from 'src/app/model/Project.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss'],
  animations: [
    /*animacion hecha para los formularios*/
    trigger('showTrigger', [
      transition(':enter', [
        style({ scale: 0.8 }),
        animate('150ms', style({ scale: 1 }))
      ])
    ])
  ]
})
export class SectionProjectsComponent implements OnInit {
  public projectList : Project[] = [];
  public project!: Project;

  public editForm!: FormGroup;
  public modalAdd: boolean = false;
  public modalEdit: boolean = false;
  public modalDelete: boolean = false;

  private deleteId!: number;

  constructor(private tokenService: TokenService, private formBuilder: FormBuilder, private portfolioService : PortfolioDataService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;

    }
    this.getProjectList();
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      detalle: [''],
      repo: [''],
      web: [''],
      imagen: ['']
    });
  }
  isLogged: boolean = false;

  getProjectList(): void {
    this.projectList = [];
    this.portfolioService.getProjectList().subscribe((projectResponse: Project[]) => {
      this.projectList = projectResponse;
    });
  }

  //Agregar Proyecto
  add(): void {
    this.modalAdd = true;
  }
  submit(add: NgForm) {
    this.portfolioService.saveProject(add.value).subscribe((projectResponse: Project) =>{
        console.log("proyecto agregado" + JSON.stringify(projectResponse));
        this.getProjectList();
      });
    this.closeAdd();
  }
  closeAdd(): void {
    this.modalAdd = false;
  }

  //----------Editar---------
  openEdit(p: Project): void {
    this.modalEdit = true;
    this.editForm.patchValue({
      id: p.id,
      nombre: p.nombre,
      detalle: p.detalle,
      repo: p.repo,
      web: p.web,
      imagen: p.imagen
    });
    this.getProjectList();
  }
  onEdit(): void {
    this.portfolioService.updateProject(this.editForm.value).subscribe((projectResponse: Project) => {
       console.log("proyecto editado" + JSON.stringify(projectResponse));
       this.getProjectList();
    });

    this.closeEdit();
  }
  
  closeEdit(): void {
    this.modalEdit = false;
  }

  //----------Borrar---------
  delete(project: Project): void {
    this.modalDelete = true;
    this.deleteId = project.id;
  }
  onDelete(): void {
    this.portfolioService.deleteProject(this.deleteId).subscribe(data=>{
      console.log("datos borrados:" + JSON.stringify(data));
      this.getProjectList();
    });
    this.closeDelete();
  }
  closeDelete(): void {
    this.modalDelete = false;
  }
}