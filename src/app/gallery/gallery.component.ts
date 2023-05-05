import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  animationState: string = 'hidden';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const element = document
      .querySelector('.gallery')
      ?.getBoundingClientRect().top;

    if (element && element < scrollPosition + windowHeight - 100) {
      this.animationState = 'visible';
    } else {
      this.animationState = 'hidden';
    }
  }

  images = [
    {
      url: '/assets/homeCard1/galery/1_a.jpeg',
      caption:
        'Inaguration Ceremont-Pain & palliative care services under Dept. of Anetherilogy , RIMS, Ranchi',
    },
    {
      url: '/assets/homeCard1/galery/1_aa.jpeg',
      caption: 'Quiz competition on World Health Day, PSM Department',
    },
    {
      url: '/assets/homeCard1/galery/3_a.jpeg',
      caption: 'Blood Collection Van provided by ICICI Foundation to RIMS',
    },
    {
      url: '/assets/homeCard1/galery/pp2_a.jpeg',
      caption:
        'Lecture by Dr. Dinesh Ranjan on Pancreas Transplantation an Alaska',
    },
  ];
}
