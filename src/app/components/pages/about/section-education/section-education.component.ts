import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'


@Component({
  selector: 'app-section-education',
  templateUrl: './section-education.component.html',
  styleUrls: ['./section-education.component.scss']
})
export class SectionEducationComponent implements OnInit {

  public image : string = " /assets/images/open-book.jpg";

  myData : any;

  constructor(private porfolioData:PortfolioDataService) { }

  ngOnInit(): void {
    
  }

}
