import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ArgPLogo: string = " /assets/images/APLogo-darkmode.png";
  
  constructor(public router: Router){

  }
  
  ngOnInit(): void {
  
  }
  
}
