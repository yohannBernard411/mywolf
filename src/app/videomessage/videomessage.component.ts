import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-videomessage',
  templateUrl: './videomessage.component.html',
  styleUrls: ['./videomessage.component.css']
})
export class VideomessageComponent implements OnInit {

  constructor(private router: Router) { }

  playerConfig = {
    controls: 0,
    mute: 0,
    autoplay: 1
  };

  ngOnInit() {
    setInterval(() => {
      this.goFirstEnigme(); 
    }, 3000);
  }

  goFirstEnigme(){
    this.router.navigate(['/enigmeune']);
  }


}
