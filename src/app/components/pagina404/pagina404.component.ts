import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';


@Component({
  selector: 'app-pagina404',
  templateUrl: './pagina404.component.html',
  styleUrls: ['./pagina404.component.scss']
})
export class Pagina404Component implements OnInit {

  constructor(private portfolioDataService: PortfolioDataService) { }

  ngOnInit(): void {
  }

}
