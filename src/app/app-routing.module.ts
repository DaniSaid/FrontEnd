import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { AboutComponent } from './components/about/about.component';

const routes : Routes = [
  {path:'', component: HomeComponent},
  {path:'About', component: AboutComponent},
  {path:'**', component: Pagina404Component}
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
