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
  public tools! : Tool[];
  public tool!: Tool;

  
  public editForm!: FormGroup;
  private deleteId!: number;
  public modalAdd: boolean = false;
  public modalEdit: boolean = false;
  public modalDelete: boolean = false;

  constructor(private portfolioService:PortfolioDataService) {
    
   }

  ngOnInit(): void {
    this.getToolList();
    this.editForm = new FormGroup({ nombre: new FormControl(''),
                                    imagen: new FormControl('')});
  }

  getToolList(){
    this.tools = [];
    this.portfolioService.getTools().subscribe(data => {
      this.tools = data;
    });
  }
  //----------Crear---------
  add(): void{
    this.modalAdd = true;
  }
  submitAdd(add: NgForm){
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
    console.log('id', tool.id)
    console.log('nombre', form.value.nombre);

    tool.nombre = form.value.nombre;
    tool.imagen = form.value.imagen;

    this.tool = new Tool(tool.id, form.value.nombre, form.value.imagen);

    this.portfolioService.updateTool(tool).subscribe(data => {
      console.log("datos de herramienta editados" + JSON.stringify(data));
    });

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