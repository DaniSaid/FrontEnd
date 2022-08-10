import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myData : any;
  sentence : string = "Buenos Aires, Argentina";

  constructor(private portfolioData:PortfolioDataService) {

    let result = this.sentence;
  
    console.log(result.length)
   }

  ngOnInit(): void {
  
      this.portfolioData.getData().subscribe(data =>{
        console.log(data);
      
      this.myData = data;
    
    });
  }
}
