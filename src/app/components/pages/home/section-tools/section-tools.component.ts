import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { Tool } from 'src/app/model/Tool.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-section-tools',
  templateUrl: './section-tools.component.html',
  styleUrls: ['./section-tools.component.scss']
})
export class SectionToolsComponent implements OnInit {
  tools! : Tool[];
  tool!: Tool;

  public open = false;
  public editForm!: FormGroup;

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  constructor(private portfolioData:PortfolioDataService, private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.cargarTools();
    this.editForm = new FormGroup({ nombre: new FormControl(''),
                                    imagen: new FormControl('')});
  }

  //métodos para abrir y cerrar el formulario

  editOpen(){
    this.open = true;
  }

  editClose(){
    this.open = false;
  }

  //almacenar datos del formulario

  submit(tool : Tool, form: FormGroup){
    console.log('id', tool.id)
    console.log('nombre', form.value.nombre);

    tool.nombre = form.value.nombre;
    tool.imagen = form.value.imagen;

    this.tool = new Tool(tool.id, form.value.nombre, form.value.imagen);

    this.portfolioData.editTool(tool.id, this.tool).subscribe(data => {
      console.log("datos de herramienta editados" + JSON.stringify(data));
    });

    form.value.nombre = '';
    form.value.imagen = '';
  }
  // métodos mat-form
  
  

  //-------------------

  cargarTools(){
    this.tools = [];
    this.portfolioData.getTools().subscribe(data => {
      this.tools = data;
    });
  }

}