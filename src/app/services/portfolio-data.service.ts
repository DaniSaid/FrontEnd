import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../model/Portfolio.model';
import { About } from '../model/About.model';
import { Tool } from '../model/Tool.model';
import { Skill } from '../model/Skill.model';
import { Experience } from '../model/Experience.model';
import { Education } from '../model/Education.model';
import { Project } from '../model/Project.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  /*readonly Url = 'https://portfoliodg.herokuapp.com/';*/
  readonly Url = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  getPortfolio(userType: string[]): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.Url + 'portfolio/'+ userType);
  }

  //---------------métodos service mi perfil(about)-------------
  getAboutList(): Observable<About[]>{
    console.log("recuperando about");
    return this.http.get<About[]>(this.Url + 'about/list');
  }

  editAboutData(about: About): Observable<any>{
    return this.http.put<any>(this.Url + 'about/edit', about);
  }
  
  //---------------métodos service de herramientas--------------
  getToolList(): Observable<Tool[]>{
    console.log("obteniendo lista Tools");
    return this.http.get<Tool[]>(this.Url + "tools/list");
  }

  saveTool(tool: Tool): Observable<any>{
    return this.http.post<any>(this.Url+ "tool/create", tool);
  }

  updateTool(tool:Tool): Observable<any>{
    return this.http.put<any>(this.Url + "tool/update/" + tool.id, tool);
  }

  deleteTool(id: number): Observable<any>{
    return this.http.delete<any>(this.Url + "tool/delete/" + id);
  }

  //---------------métodos service de Proyectos-----------------
  getProjectList(): Observable<Project[]>{
    console.log("obteniendo lista Projects");
    return this.http.get<Project[]>(this.Url + "projects/list");
  }

  saveProject(project: Project): Observable<any>{
    return this.http.post<any>(this.Url+ "project/create", project);
  }

  updateProject(project: Project): Observable<any>{
    return this.http.put<any>(this.Url + "project/update/" + project.id, project);
  }

  deleteProject(id: number): Observable<any>{
    return this.http.delete<any>(this.Url + "project/delete/" + id);
  }

  //---------------métodos service de habilidades---------------
  getSkillList(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.Url + "skill/list");
  }

  saveSkill(skill: Skill): Observable<any>{
    return this.http.post<any>(this.Url + "skill/create", skill);
  }

  updateSkill(skill: Skill): Observable<any>{
    return this.http.put<any>(this.Url + "skill/update/"+ skill.id, skill);
  }

  deleteSkill(id: number): Observable<any>{
    return this.http.delete<any>(this.Url + "skill/delete/" + id);
  }

  //---------------métodos service de Experiencias---------------
  getExperienceList(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.Url + "experience/list");
  }

  /*
  getExperienceById(id:number): Observable<Experience>{
    return this.http.get<Experience>(this.Url + "experience/detail/" + id);
  }
  */

  saveExperience(experience: Experience): Observable<any>{
    return this.http.post<any>(this.Url + "experience/create", experience);
  }

  updateExperience(experience: Experience): Observable<any>{
    return this.http.put<any>(this.Url + 'experience/update/' + experience.id, experience);
  }

  deleteExperience(id: number): Observable<any>{
    return this.http.delete<any>(this.Url + "experience/delete/" + id);
  }

  //---------------métodos service Educación---------------
  getEducationList(): Observable<Education[]>{
    return this.http.get<Education[]>(this.Url + "education/list");
  }

  /*
  getEducationById(id: number): Observable<Education>{
    return this.http.get<Education>(this.Url + "education/detail" + id);
  }
  */

  saveEducation(education : Education):Observable<any>{
    return this.http.post<any>(this.Url + "education/create", education);
  }

  updateEducation(education : Education): Observable<any>{
    return this.http.put<any>(this.Url + "education/update/" + education.id, education);
  }

  deleteEducation(id: number):Observable<any>{
    return this.http.delete<any>(this.Url + "education/delete/" + id);
  }
}
