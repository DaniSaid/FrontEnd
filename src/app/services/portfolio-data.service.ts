import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../model/Portfolio.model';
import { About } from '../model/About.model';
import { Tool } from '../model/Tool.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  readonly Url = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getPortfolio(aboutId: number): Observable<Portfolio>{
    console.log("portfolio:" + aboutId);
    return this.http.get<Portfolio>(this.Url + `/portfolio/${aboutId}`);
  }

  getAbout(): Observable<About[]>{
    console.log("recuperando about");
    return this.http.get<About[]>(this.Url + '/about');
  }
  
  //métodos service de tool

  getTools(): Observable<Tool[]>{
    console.log("obteniendo lista Tools");
    return this.http.get<Tool[]>(this.Url + "/tools");
  }

  
}
