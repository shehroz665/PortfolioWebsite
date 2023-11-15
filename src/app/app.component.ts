import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  sliderPosition = '-100%';

  ngOnInit(): void {
    setTimeout(() => {
      this.sliderPosition = '0';
    }, 500);
  }
}
