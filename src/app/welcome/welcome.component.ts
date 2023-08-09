import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  constructor(private router: Router) { }

  deverrouillage: boolean = false;
  warning: boolean = false;


 onSubmit(userForm: any) {
  console.log(userForm.value);
  if(["lorrie", "Lorrie"].includes(userForm.value.prenom) && (["Largeaud", "largeaud"].includes(userForm.value.nom) && (userForm.value.email=="malory7983@hotmail.fr"))){
    console.log("toutes les conditions sont vrais!!!!");
    this.deverrouillage = true;
    this.warning = false;
    this.router.navigate(['/videomessage'])
  }else{
    console.log("toutes les conditions ne sont pas vrais!!!!");
    this.warning = true;
    this.deverrouillage = false;
  }
}

}
