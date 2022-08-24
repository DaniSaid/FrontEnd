import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/model/Skill.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {
 
  public skillList: Skill[] = [];
  public skill!: Skill;
  public editForm!: FormGroup;
  public modalEdit: boolean = false;

  constructor(private portfolioService: PortfolioDataService) { }

  ngOnInit(): void {
    this.getSkillList();
  
    this.editForm = new FormGroup({
      nombre: new FormControl('')
    });

  }

  getSkillList(): void {
    this.skillList;
    this.portfolioService.getSkillList().subscribe((skillResponse: Skill[])=>{
      this.skillList = skillResponse;
    });
  }

  editOpen(): void {
    this.modalEdit = true;
  }
  submitEdit(skill: Skill, editForm: FormGroup){
    console.log("herramienta id:" + skill.id);
    console.log("herramienta obtenida del submit :" + editForm.value.nombre);

    skill.nombre = editForm.value.nombre;

    this.skill = new Skill(skill.id , skill.nombre);
    console.log(skill.nombre);
    this.portfolioService.updateSkill(skill).subscribe(data => {
      console.log("habilidades editadas" + JSON.stringify(data));
    });
  }
  editClose(): void {
    this.modalEdit = false;
  }

}
