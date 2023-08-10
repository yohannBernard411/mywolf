import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VideomessageComponent } from './videomessage/videomessage.component';
import { EnigmeuneComponent } from './enigmeune/enigmeune.component';
import { RoutedeuxComponent } from './routedeux/routedeux.component';
import { CarteComponent } from './carte/carte.component';
import { EnigmetroisComponent } from './enigmetrois/enigmetrois.component';
import { AmourComponent } from './amour/amour.component';


const routes: Routes = [
  { path: 'amour', component: AmourComponent },
  { path: 'enigmetrois', component: EnigmetroisComponent },
  { path: 'carte/:id', component: CarteComponent },
  { path: 'routedeux/:id', component: RoutedeuxComponent },
  { path: 'enigmeune', component: EnigmeuneComponent },
  { path: 'videomessage', component: VideomessageComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
