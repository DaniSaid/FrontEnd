import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-section-tools',
  templateUrl: './section-tools.component.html',
  styleUrls: ['./section-tools.component.scss']
})
export class SectionToolsComponent implements OnInit {

 myData : any;

  constructor(private portfolioData:PortfolioDataService) { }

  ngOnInit(): void {
  
    

  }
  onDrop(event : CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(this.myData.tools,
        event.previousIndex,
        event.currentIndex)
    }
  }
}
