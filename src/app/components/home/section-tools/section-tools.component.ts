import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Tool } from 'src/app/model/Tool.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { TokenService } from 'src/app/services/token.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-section-tools',
  templateUrl: './section-tools.component.html',
  styleUrls: ['./section-tools.component.scss'],
  animations: [
    //animacion hecha para los formularios
    trigger('showTrigger', [
      transition(':enter', [
        style({ scale: 0.8 }),
        animate('150ms', style({ scale: 1 }))
      ])
    ])
  ]
})
export class SectionToolsComponent implements OnInit {
  public toolList: Tool[] = [];
  public tool!: Tool;

  public editForm!: FormGroup;
  public modalAdd: boolean = false;
  public modalEdit: boolean = false;
  public modalDelete: boolean = false;

  private deleteId!: number;

  constructor(
    private portfolioService: PortfolioDataService,
    private formBuilder: FormBuilder,
    private tokenService: TokenService
  ) {

  }

  isLogged: boolean = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;

    }

    this.getToolList();
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      imagen: ['']
    });

  }

  getToolList() {
    this.toolList = [];
    this.portfolioService.getToolList().subscribe((toolResponse: Tool[]) => {
      this.toolList = toolResponse;
    });
  }
  //----------Crear---------
  add(): void {
    this.modalAdd = true;
  }
  submit(add: NgForm) {
    this.portfolioService.saveTool(add.value).subscribe((toolResponse: Tool) => {
      console.log("herramienta agregada" + JSON.stringify(toolResponse));
      this.getToolList();
    });
  }
  closeAdd(): void {
    this.modalAdd = false;
  }

  //----------Editar---------
  editOpen(t: Tool): void {
    this.modalEdit = true;
    this.editForm.patchValue({
      id: t.id,
      nombre: t.nombre,
      imagen: t.imagen
    });
    this.getToolList();
  }
  onEdit(): void {
    this.portfolioService.updateTool(this.editForm.value).subscribe((toolResponse: Tool) => {
      console.log("herramienta editada" + JSON.stringify(toolResponse));
      this.getToolList();
    });

    this.editClose();
  }
  editClose(): void {
    this.modalEdit = false;
  }

  //----------Borrar---------
  delete(tool: Tool): void {
    this.modalDelete = true;
    this.deleteId = tool.id;
  }

  onDelete(): void {
    this.portfolioService.deleteTool(this.deleteId).subscribe(data => {
      this.getToolList();
    });
    this.closeDelete();
  }

  closeDelete(): void {
    this.modalDelete = false;
  }

}