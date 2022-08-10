import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  portfolio : any;
  
  constructor(private portfolioData:PortfolioDataService, public router: Router){

  }
  
  ngOnInit(): void {
  
    //service trae los datos del .json
    this.portfolioData.getData().subscribe(data =>{
      console.log(data);
    this.portfolio = data;

    });
  }
  
}
