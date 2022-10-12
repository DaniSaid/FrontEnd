import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { SectionMainComponent } from './components/home/section-main/section-main.component';
import { SectionToolsComponent } from './components/home/section-tools/section-tools.component';
import { SectionContactComponent } from './components/home/section-contact/section-contact.component';
import { AboutComponent } from './components/about/about.component';
import { SectionEducationComponent } from './components/about/section-education/section-education.component';
import { SectionExperienceComponent } from './components/about/section-experience/section-experience.component';
import { SectionProjectsComponent } from './components/home/section-projects/section-projects.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginButtonComponent} from './components/login-button/login-button.component';
import { AboutButtonComponent } from './components/about-button/about-button.component';
import { SectionSkillsComponent } from './components/about/section-skills/section-skills.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutButtonComponent,
    ToolbarComponent,
    LoginButtonComponent,
    Pagina404Component,
    SectionToolsComponent,
    SectionContactComponent,
    AboutComponent,
    SectionEducationComponent,
    SectionExperienceComponent,
    SectionProjectsComponent,
    FooterComponent,
    SectionMainComponent,
    SectionSkillsComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }