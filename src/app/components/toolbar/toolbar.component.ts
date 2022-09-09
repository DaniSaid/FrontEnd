import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  //animacion del menu
  animations: [
    //nav
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('800ms ease-in-out')),
      transition('out => in', animate('800ms ease-in-out'))
    ]),
    ///menu
    trigger('toogleSpan',[
      state('open', style({
          transform: "rotate(45deg) translate(5px, 6px)",
          background: "#D74E09"
        })
      ),
      state('closed', style({
        transform: "rotate(-45deg) translate(-5px, 6px)"
      }))
    ]),
    trigger('toogleSpan2',[
      state('open', style({
         opacity: 100,
         width: 0,
         background: "#222"
        })
      ),
      state('closed', style({
        opacity: 0,
        width: 100
      }))
    ]),
    trigger('toogleSpan3',[
      state('open', style({
        transform: "rotate(-45deg) translate(5px, -6px)",
        background: "#D74E09"
        })
      ),
      state('closed', style({
        transform: "rotate(45deg) translate(5px, 6px)",
      }))
    ])
  ]
})

export class ToolbarComponent implements OnInit {

  ArgPLogo: string = " /assets/images/APLogo-darkmode.png";

  constructor(private portfolioData:PortfolioDataService, public router: Router){

  }
  
  ngOnInit(): void {
  
  }
  menuState:string = 'close';
  navState:string = 'out';
  
    toggleMenu() {
      // 1-line if statement that toggles the value:
      this.navState = this.navState === 'out' ? 'in' : 'out';
      this.menuState = this.menuState === 'close' ? 'open' : 'close';
    }
}