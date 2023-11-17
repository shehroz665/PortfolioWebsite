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
  name:string="Hi I'm Shehroz";
  paragraph:string="Experienced Web developer with a focus on Web APIs and Frontend development. Proficient in building and optimizing APIs, as well as creating visually appealing and responsive web interfaces. Skilled in various frontend technologies and dedicated to staying updated with industry trends.";
  ngOnInit(): void {
    setTimeout(() => {
      this.isContentVisible = true;
    }, 500);
  }
}
