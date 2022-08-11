import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss']
})
export class SectionExperienceComponent implements OnInit {

public image : string = " /assets/images/work-desk.jpg";
myData : any;

  constructor(private portfolioData:PortfolioDataService) { }

  ngOnInit(): void {
  
   

  }

}