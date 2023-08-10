import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-videomessage',
  templateUrl: './videomessage.component.html',
  styleUrls: ['./videomessage.component.css']
})
export class VideomessageComponent {

  constructor(private router: Router) { }

  playerConfig = {
    controls: 0,
    mute: 0,
    autoplay: 1
  };

  goFirstEnigme(){
    this.router.navigate(['/enigmeune']);
  }


}
