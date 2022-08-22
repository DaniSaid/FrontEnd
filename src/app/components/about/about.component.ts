import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/Experience.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
