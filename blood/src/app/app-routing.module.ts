import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermComponent } from './term/term.component';
import { DonorComponent } from './donor/donor.component';
import { BtnComponent } from './btn/btn.component';


const routes: Routes = 
[
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'term' , component:TermComponent},
  {path:'donor' , component:DonorComponent},
  {path:'btn' , component:BtnComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
