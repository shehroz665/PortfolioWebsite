import { Component } from '@angular/core';
import { faCoffee ,} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faCoffee = faCoffee;
  gotoLinkedIn(){
    console.log('GO');
    
  }
}
