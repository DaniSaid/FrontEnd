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

  constructor(private portfolioData:PortfolioDataService, private formBuilder: FormBuilder) { }

  //-----------------
  ngOnInit(): void {
    
  }

}
