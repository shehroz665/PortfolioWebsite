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
  isContentVisible = false;
  isContentVisible1 = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.isContentVisible = true;
    }, 500);
    setTimeout(() => {
      this.isContentVisible1 = true;
    }, 500);
  }
}
