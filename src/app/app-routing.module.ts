import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"about",component:AboutComponent,title:"about"},
  {path:"portfolio",component:PorfolioComponent,title:"portfolio"},
  {path:"contact",component:ContactComponent,title:"contact"},
  {path:"**",component:NotFoundComponent,title:"PageNotFound"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
