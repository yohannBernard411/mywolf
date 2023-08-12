import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-enigmetrois',
  templateUrl: './enigmetrois.component.html',
  styleUrls: ['./enigmetrois.component.css']
})
export class EnigmetroisComponent {

  constructor(private router: Router ) { }

  level1: boolean = false;
  level2: boolean = false;
  level3: boolean = false;
  level4: boolean = false;

  indice: boolean = false;


  onSubmit1(qfirstForm: any) {
    if(["mywolf", "MYWOLF", "My Wolf", "my wolf", "MY WOLF", "My wolf", "Mywolf"].includes(qfirstForm.value.qfirst)) {
      this.level1 = true;
    }else{
      this.level1 = false;
    }
  }
  onSubmit2(qsecondForm: any) {
    if(["moto", "une moto", "Moto", "Une moto", "UNE MOTO", "Une Moto"].includes(qsecondForm.value.qsecond)) {
      this.level2 = true;
    }else{
      this.level2 = false;
    }
  }

  // onSubmit3(qthirdForm: any) {
  //   if(qthirdForm.pays=="trois") {
  //     console.log("third true: "+qthirdForm);
  //     this.level3 = true;
  //   }else{
  //     console.log("third false: "+qthirdForm);
  //     this.level3 = false;
  //   }
  // }

  @ViewChild('teams') teams!: ElementRef;
	selectedTeam = '';
	onSelected():void {
		this.selectedTeam = this.teams.nativeElement.value;
    console.log("valeur choisit: "+ this.selectedTeam);
    if(this.selectedTeam=="trois") {
      this.level3 = true;
    }else{
      this.level3 = false;
    }
	}

  @ViewChild('qualite') qualite!: ElementRef;
	selectedQualite = '';
	onSelectedqualite():void {
		this.selectedQualite = this.qualite.nativeElement.value;
    console.log("valeur choisit: "+ this.selectedQualite);
    if(this.selectedQualite=="quatre") {
      this.level4 = true;
      this.indice = false;
    }else{
      this.indice = true;
      this.level4 = false;
    }
	}

  // onSubmit4(qfourForm: any) {
  //   if(qfourForm.value.qfour=="roux") {
  //     this.level4 = true;
  //   }else{
  //     this.level4 = false;
  //   }
  // }

  gotosecond(){
    this.router.navigate(['/amour']);
  }

}
