import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './components/pages/home/home.component';
import { SectionMainComponent } from './components/pages/home/section-main/section-main.component';
import { SectionToolsComponent } from './components/pages/home/section-tools/section-tools.component';
import { SectionContactComponent } from './components/pages/home/section-contact/section-contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SectionEducationComponent } from './components/pages/about/section-education/section-education.component';
import { SectionExperienceComponent } from './components/pages/about/section-experience/section-experience.component';
import { SectionProjectsComponent } from './components/pages/home/section-projects/section-projects.component';
import { Pagina404Component } from './components/pages/pagina404/pagina404.component';

import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginButtonComponent} from './components/login-button/login-button.component';
import { AboutButtonComponent } from './components/about-button/about-button.component';
import { EditMainComponent } from './components/pages/home/section-main/edit-main/edit-main.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutButtonComponent,
    ToolbarComponent,
    LoginButtonComponent,
    LoginComponent,
    Pagina404Component,
    SectionToolsComponent,
    SectionContactComponent,
    AboutComponent,
    SectionEducationComponent,
    SectionExperienceComponent,
    SectionProjectsComponent,
    FooterComponent,
    SectionMainComponent,
    EditMainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgsRevealModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }