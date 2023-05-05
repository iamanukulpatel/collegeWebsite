import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css'],
})
export class SocialMediaComponent {
  animationState: string = 'hidden';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const elementPosition = document
      .querySelector('.socialMedia')
      ?.getBoundingClientRect().top;

    if (
      elementPosition &&
      elementPosition < scrollPosition + windowHeight - 100
    ) {
      this.animationState = 'visible';
    } else {
      this.animationState = 'hidden';
    }
  }
}
