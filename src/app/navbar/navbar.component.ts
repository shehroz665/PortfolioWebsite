import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  scrollTo(section: string): void {
    this.router.navigate([], {
      fragment: section,
      relativeTo: this.router.routerState.root
    });
  }
}
