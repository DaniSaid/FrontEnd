import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../model/Portfolio.model';
import { About } from '../model/About.model';
import { Tool } from '../model/Tool.model';
import { Skill } from '../model/Skill.model';
import { Experience } from '../model/Experience.model';

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

  //métodos service mi perfil(about)
  getAboutList(): Observable<About[]>{
    console.log("recuperando about");
    return this.http.get<About[]>(this.Url + '/about-list');
  }

  editAboutData(about: About): Observable<any>{
    return this.http.post<any>(this.Url + '/portfolio/about/edit', about);
  }
  
  //métodos service de herramientas
  getTools(): Observable<Tool[]>{
    console.log("obteniendo lista Tools");
    return this.http.get<Tool[]>(this.Url + "/tools-list");
  }

  editTool( id:number, tool:Tool): Observable<any>{
    return this.http.put<any>(this.Url + `/portfolio/tool/edit/${id}`, tool);
  }

  //métodos service de habilidades
  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.Url + "/skills-list");
  }

  getSkillById(id:number): Observable<Skill>{
    return this.http.get<Skill>(this.Url + `/portfolio/skill/${id}`)
  }

  editSkill( id: number, skill: Skill): Observable<any>{
    return this.http.put<any>(this.Url + `/portfolio/skill/edit/${id}`, skill);
  }

  //métodos service de Experiencias
  traerExperiencias(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.Url + "/experience-list");
  }

  getExperienceById(id:number): Observable<Experience>{
    return this.http.get<Experience>(this.Url + `/experience/detail/${id}`);
  }

  saveExperience(experience: Experience): Observable<any>{
    return this.http.post<any>(this.Url + "/experience/create", experience);
  }

  updateExperience(experience: Experience): Observable<any>{
    return this.http.put<any>(this.Url + '/experience/update/' + experience.id, experience);
  }

  deleteExperience(id: number): Observable<any>{
    return this.http.delete<any>(this.Url + "/experience/delete/" + id);
  }

}
