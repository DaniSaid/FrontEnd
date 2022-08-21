import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/model/Skill.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {
  skills!: Skill[];
  skill!: Skill;
  public open = false;

  constructor(private portfolioData:PortfolioDataService, private formBuilder: FormBuilder) { }

  //-----------------
  ngOnInit(): void {
    this.cargarSkills();
  }

  editOpen(){
    this.open = true;
  }
  editClose(){
    this.open = false;
  }
  //------------------

  cargarSkills(){
    this.skills = [];
    this.portfolioData.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  cargarSkillById(id: number){
    this.portfolioData.getSkillById(id).subscribe(data => {
      this.skill = data;
    });

  }

  //------------------
  submit(skill:Skill, form:FormGroup){
    let cont = 0;
    for(let s of this.skills){
      cont = +1;
      console.log('id' + s.id);
      console.log('contador' + cont);
      this.cargarSkillById(s.id);
    }
  }
}
