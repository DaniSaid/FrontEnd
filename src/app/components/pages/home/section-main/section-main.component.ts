import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/About.model';
import { Portfolio } from 'src/app/model/Portfolio.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {

  about!: About[];
  portfolio!: Portfolio;

  constructor(private portfolioData:PortfolioDataService) {

  }

  ngOnInit(): void {
    this.cargarPortfolio();
    this.cargarAbout();
  }

  cargarPortfolio(){
    this.portfolioData.getPortfolio(2).subscribe( data => {
      this.portfolio = data;
    });
  }

  cargarAbout(){
    this.about = [];
    this.portfolioData.getAbout().subscribe((aboutResponse: About[]) =>{
      this.about = aboutResponse;
    })
  }
}
