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

  getPortfolioById(aboutId: number): Observable<Portfolio>{
    console.log("portfolio:" + aboutId);
    return this.http.get<Portfolio>(this.Url + `/portfolio/${aboutId}`);
  }

  //métodos service Acerca de

  getAboutList(): Observable<About[]>{
    console.log("recuperando about");
    return this.http.get<About[]>(this.Url + '/about-lista');
  }

  getAbout(): Observable<About>{
    return this.http.get<About>(this.Url + '/about');
  }

  editAboutData(about: About): Observable<any>{
    return this.http.post<any>(this.Url + '/portfolio/about/edit', about);
  }

  
  
  //métodos service de tool

  getTools(): Observable<Tool[]>{
    console.log("obteniendo lista Tools");
    return this.http.get<Tool[]>(this.Url + "/tools");
  }

  
}
