import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import { Tool } from 'src/app/model/Tool.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-section-tools',
  templateUrl: './section-tools.component.html',
  styleUrls: ['./section-tools.component.scss']
})
export class SectionToolsComponent implements OnInit {
  public toolList : Tool[] = [];
  public tool!: Tool;

  public editForm!: FormGroup;
  public modalAdd: boolean = false;
  public modalEdit: boolean = false;
  public modalDelete: boolean = false;

  private deleteId!: number;

  constructor(private portfolioService:PortfolioDataService, private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.getToolList();
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      imagen: ['']
    });

  }

  getToolList(){
    this.toolList = [];
    this.portfolioService.getToolList().subscribe((toolResponse: Tool[]) => {
      this.toolList = toolResponse;
    });
  }
  //----------Crear---------
  add(): void{
    this.modalAdd = true;
  }
  submit(add: NgForm){
    this.portfolioService.saveTool(add.value).subscribe((toolResponse: Tool) =>{
      console.log("herramienta agregada" + JSON.stringify(toolResponse));
      this.getToolList();
    });
  }
  closeAdd(): void{
    this.modalAdd = false;
  }

  //----------Editar---------
  editOpen(){
    this.modalEdit = true;
  }
  submitEdit(tool : Tool, form: FormGroup){
    console.log('tool id:' + tool.id)
    console.log('tool nombre'+ form.value.nombre);

    this.editForm.patchValue({
      id: tool.id,
      nombre: form.value.nombre,
      imagen: form.value.imagen
    });

    this.portfolioService.updateTool(this.editForm.value).subscribe((toolResponse: Tool) => {
      console.log("herramienta editada" + JSON.stringify(toolResponse));
      this.getToolList();
    });

    this.editClose();
  }
  editClose(){
    this.modalEdit = false;
  }
  //----------Borrar---------
  delete(tool: Tool): void{
    this.modalDelete = true;
    this.deleteId = tool.id;
  }
  onDelete():void{
    this.portfolioService.deleteTool(this.deleteId).subscribe(data =>{
      console.log("herramienta borrada" + JSON.stringify(data));
      this.getToolList();
    });
    this.closeDelete();
  }
  closeDelete(){
    this.modalDelete = false;
  }
}