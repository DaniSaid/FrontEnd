import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Education } from 'src/app/model/Education.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service'
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-section-education',
  templateUrl: './section-education.component.html',
  styleUrls: ['./section-education.component.scss']
})
export class SectionEducationComponent implements OnInit {

  public image : string = " /assets/images/open-book.jpg";

  public educationList: Education[] = [];
  public education!: Education;

  public editForm!: FormGroup;
  public modalAdd: boolean = false;
  public modalEdit: boolean = false;
  public modalDelete: boolean = false;

  private deleteId!: number;

  constructor(private portfolioService: PortfolioDataService, private formBuilder: FormBuilder, private tokenService: TokenService) { }
   
  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;

    }

    this.getEducationList();
    this.editForm = this.formBuilder.group({
      id:[''],
      titulo: [''],
      detalle: [''],
      fechaIni: [''],
      fechaFin: [''],
      imagen: ['']
    });
  }

  getEducationList(): void{
    this.educationList = [];
    this.portfolioService.getEducationList().subscribe(
      (eduResponse: Education[])=>{
        this.educationList = eduResponse;
      })
  }

  add():void{
    this.modalAdd = true;
  }
  submit(add: NgForm){
    this.portfolioService.saveEducation(add.value).subscribe((eduResponse: Education)=>{
      console.log("edu agregada:" + JSON.stringify(eduResponse));
      this.getEducationList();
    });
  }
  closeAdd(): void{
    this.modalAdd = false;
  }

  edit(education: Education){
    this.modalEdit = true;
    var eduId = education.id;
    this.editForm.patchValue({
      id: eduId,
      titulo: education.titulo,
      detalle: education.detalle,
      fechaIni: education.fechaIni,
      fechaFin: education.fechaFin,
      imagen: education.imagen
    });
  }
  onEdit(): void{
    this.portfolioService.updateEducation(this.editForm.value).subscribe(data =>{
      console.log("datos editados:" + JSON.stringify(data));
      this.getEducationList();
    }
    );
  }
  closeEdit(): void{
    this.modalEdit = false;
  }

  delete(edu: Education): void{
    this.modalDelete = true;
    this.deleteId = edu.id;
  }
  onDelete(): void{
    this.portfolioService.deleteEducation(this.deleteId).subscribe(data=>{
      console.log("datos borrados:" + JSON.stringify(data));
      this.getEducationList();
    });
    this.closeDelete();
  }

  closeDelete(): void{
    this.modalDelete = false;
  }

}
