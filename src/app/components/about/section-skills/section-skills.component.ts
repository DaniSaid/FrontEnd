import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { Skill } from 'src/app/model/Skill.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss'],
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
export class SectionSkillsComponent implements OnInit {
  public skillList: Skill[] = [];
  public skill!: Skill;

  public editForm!: FormGroup;
  public modalAdd: boolean = false;
  public modalEdit: boolean = false;

  private deleteId!: number;
  isLogged: boolean = false;

//  iconList : string[] = ['handshake', 'diversity_3', 'brush', 'emoji_objects', 'chat_bubble', 'groups', 'event', 'bolt', 'code_blocks'];

  constructor(
    private portfolioService: PortfolioDataService,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    public dialog: MatDialog) { 
   
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;

    }
    this.getSkillList();
    this.editForm = this.formBuilder.group({
      id: [''],
      skill: [''],
      progress: [''],
      icon: ['']
    });
  }

  getSkillList(){
    this.skillList = [];
    this.portfolioService.getSkillList().subscribe((skillResponse: Skill[])=> {
      this.skillList = skillResponse;
      console.log(this.skillList);
    });
  }
  
  //----Agregar
  add(): void{
    this.modalAdd = true;
  }
  submit(addForm: NgForm){
    this.portfolioService.saveSkill(addForm.value).subscribe((skillResponse: Skill)=>{
      console.log("habilidad agregada" + JSON.stringify(skillResponse));
      this.getSkillList();
    });
  }
  closeAdd(): void{
    this.modalAdd = false;
  }
  //----Borrar
  delete(skill: Skill):void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: '¿Quiere borrar la habilidad?',
      panelClass: 'delete-warning'
    });
    dialogRef.afterClosed().subscribe(res =>{
      if(res){
        this.deleteId = skill.id;
        this.onDelete();
      }
    });
  }

  onDelete(): void{
    this.portfolioService.deleteSkill(this.deleteId).subscribe(data =>{
      console.log("habilidad borrada" + JSON.stringify(data));
      this.getSkillList();
    });
  }
  
  //----Editar
  openEdit(e : Skill): void{
    this.modalEdit = true;
    this.editForm.patchValue({
      id: e.id,
      skill: e.skill,
      progress: e.progress,
      icon: e.icon
    });

    this.getSkillList();
  }

  onEdit(): void{
    this.portfolioService.updateSkill(this.editForm.value).subscribe((skillResponse: Skill) =>{
      console.log("habilidad editada" + JSON.stringify(skillResponse));
      this.getSkillList();
    });
    this.closeEdit();
  }

  closeEdit(): void{
    this.modalEdit = false;
  }
}
