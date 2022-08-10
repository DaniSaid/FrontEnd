import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { Pagina404Component } from './components/pages/pagina404/pagina404.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes : Routes = [
  {path:'', component: HomeComponent},
  {path:'About', component: AboutComponent},
  {path:'Login', component: LoginComponent},
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
