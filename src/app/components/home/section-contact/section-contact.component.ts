import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {
 
  discord: string = " /assets/images/logos/discord-logo.svg";
  discordName: string = "Dani G #2921";
  linkedIn: string = " /assets/images/logos/linkedin-logo.svg";
  linkedInLink: string = "https://www.linkedin.com/in/daniela-gavil%C3%A1n-bba28122a/";
  gmail: string = " /assets/images/logos/mail-logo.svg";
  myMail: string = "daniela.gavilan05@gmail.com";

  constructor(private portfolioService: PortfolioDataService, private snack: MatSnackBar) { }

  ngOnInit(): void {

  }

  //método para copiar mis redes al portapapeles
  copie(n : number): void{
    let x : number = n;

    switch (x) {
      case 0 :
        navigator.clipboard.writeText(this.discordName);
        this.snack.open('Usuario de Discord copiado!', 'Cerrar', {
          duration : 5000
        });
        break;
      case 1: 
        navigator.clipboard.writeText(this.linkedInLink);
        this.snack.open('link de linkedin copiado!', 'Cerrar', {
          duration : 5000
        });
        break;
      case 2:
        navigator.clipboard.writeText(this.myMail);
        this.snack.open('mail copiado!', 'Cerrar', {
          duration : 5000
        });
        break;
    }
  }


}
