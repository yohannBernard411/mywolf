import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VideomessageComponent } from './videomessage/videomessage.component';
import { EnigmeuneComponent } from './enigmeune/enigmeune.component';
import { EnigmedeuxComponent } from './enigmedeux/enigmedeux.component';
import { CarteComponent } from './carte/carte.component';


const routes: Routes = [
  { path: 'carte/:id', component: CarteComponent },
  { path: 'enigmedeux/:id', component: EnigmedeuxComponent },
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
