import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/model/Tool.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-section-tools',
  templateUrl: './section-tools.component.html',
  styleUrls: ['./section-tools.component.scss']
})
export class SectionToolsComponent implements OnInit {

 tools! : Tool[];

  constructor(private portfolioData:PortfolioDataService) { }

  ngOnInit(): void {
  
    this.cargarTools();

  }

  cargarTools(){
    this.tools = [];
    this.portfolioData.getTools().subscribe(data => {
      this.tools = data;
    });
  }

}