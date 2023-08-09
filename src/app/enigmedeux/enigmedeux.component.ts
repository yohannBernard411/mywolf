import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enigmedeux',
  templateUrl: './enigmedeux.component.html',
  styleUrls: ['./enigmedeux.component.css']
})
export class EnigmedeuxComponent implements OnInit {

  id: any = '';
  returnid: any = 0;


  constructor(private router: Router, private route: ActivatedRoute ) { }

  

  level1: boolean = false;
  level2: boolean = false;
  level3: boolean = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id==2){
      this.level1=true;
    }else if(this.id==3){
      this.level1=true;
      this.level2=true;
    }else if(this.id==4){
      this.level1=true;
      this.level2=true;
      this.level3=true;
  }
}

  onSubmit1(qunForm: any) {
    if(["coulon", "Coulon", "COULON"].includes(qunForm.value.qun)) {
      this.level1 = true;
      this.router.navigate(['/carte', 1]);
    }else{
      this.level1 = false;
    }
  }

  onSubmit2(qdeuxForm: any) {
    if(["saint maxire", "st maxire", "SAINT MAXIRE", "Saint Maxire", "st Marire", "st MAXIRE"].includes(qdeuxForm.value.qdeux)) {
      this.level2 = true;
      this.router.navigate(['/carte', 2]);
    }else{
      this.level2 = false;
    }
  }

  onSubmit3(qtroisForm: any) {
    if(["chauray", "Chauray"].includes(qtroisForm.value.qtrois)) {
      this.level3 = true;
      this.router.navigate(['/carte', 3]);
    }else{
      this.level3 = false;
    }
  }

  gotothird(){
    this.router.navigate(['/enigmetrois']);
  }

}
