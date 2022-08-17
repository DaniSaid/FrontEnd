import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/About.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.scss']
})
export class EditMainComponent implements OnInit {

  about!: About;

  constructor(private portfolioData:PortfolioDataService) { }

  ngOnInit(): void {
  }

  //estado de botones
  open = true;

  //métodos para el formulario

  editClose(){
    this.open = false;

  }

  save(): void{

  }

}
