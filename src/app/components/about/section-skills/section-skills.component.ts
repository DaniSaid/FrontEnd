import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/model/Skill.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent implements OnInit {
  public skillList: Skill[] = [];
  public skill!: Skill;

  public modalAdd: boolean = true;
  public modalDelete: boolean = true;

  constructor(private portfolioService: PortfolioDataService, public dialog: MatDialog) { 
   
  }

  ngOnInit(): void {
    this.getSkillList();

  }

  getSkillList(){
    this.skillList = [];
    this.portfolioService.getSkillList().subscribe((skillResponse: Skill[])=> {
      this.skillList = skillResponse;
      console.log(this.skillList);
    });
  }
  
  submit(addForm: NgForm){
    this.portfolioService.saveSkill(addForm.value).subscribe((skillResponse: Skill)=>{
      console.log("habilidad agregada" + JSON.stringify(skillResponse));
      this.getSkillList();
    });
  }


  
}
