import { Component } from '@angular/core';
import { faLinkedin,faGithub  } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  linkedinIcon = faLinkedin;
  githubIcon=faGithub;
  sizeIcon: SizeProp = '2x';
  gotoLinkedIn(){
    console.log('GO');
    
  }
}
