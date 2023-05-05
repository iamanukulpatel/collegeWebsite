import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isNavbarFixed: boolean = false;

  password: string = '';
  show = false;

  ngOnInit() {
    this.password = 'password';
  }
  toggle() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbarHeight = 190; // Adjust the navbar height
    this.isNavbarFixed = window.pageYOffset > navbarHeight;
  }
}
