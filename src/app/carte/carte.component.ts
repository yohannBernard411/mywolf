import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  name = 'Angular 5';
  screenWidth: any;  
  screenHeight: any;
  id: any = 0;

  ngOnInit() {
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight; 
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("recuperation id: "+this.id);
    setInterval(() => {
      this.drawRectable(); 
    }, 1000);
  }

  retour(){
    if(this.id==1){
    this.router.navigate(['/enigmedeux', 2]);
    }else if(this.id==2){
      this.router.navigate(['/enigmedeux', 3]);
    }else if(this.id==3){
      this.router.navigate(['/enigmedeux', 4]);
    }
  }

  drawRectable() {
    var canvas: any = document.getElementById('stage');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = "blue";
      ctx.beginPath();
      if(this.id>=1){
        ctx.arc(50, 73, 4, 0, Math.PI * 2, true);
        ctx.stroke();
      }
      if(this.id>=2){
        ctx.arc(150, 45, 4, 0, Math.PI * 2, true);
        ctx.stroke();
      }
      if(this.id>=3){
        ctx.arc(260, 60, 4, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.arc(50, 73, 4, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = "purple";
        ctx.moveTo(50, 73);
        ctx.lineTo(260, 60);
        ctx.lineTo(150, 45);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "8px";
        ctx.fillText("Le colis", 150, 52);
        ctx.fillText("est caché dans l'", 140, 58);
        ctx.fillText("armoire de la chambre", 100, 65);
      }
      
    }

  }


}
