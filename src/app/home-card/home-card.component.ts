import { Component, OnInit } from '@angular/core';
import { Card, Rims } from './card';
import { HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter, :leave', animate('500ms ease')),
    ]),
  ],
})
export class HomeCardComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Calculate the scroll position and trigger the animation if the element is within the desired viewport
    const windowHeight = window.innerHeight;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    const elements: NodeListOf<HTMLElement> =
      document.querySelectorAll('.colAnimation');
    let delay = 0; // Initial delay between animations in milliseconds

    elements.forEach((element: HTMLElement) => {
      const elementPosition = element.getBoundingClientRect().top;
      if (elementPosition < scrollPosition + windowHeight - 100) {
        setTimeout(() => {
          element.classList.add('animate');
        }, delay);
        delay += 100; // Increment the delay for the next element
      } else {
        element.classList.remove('animate');
      }
    });
  }
  ngOnInit(): void {}
  img: Card[] = [
    {
      image: 'assets/homeCard1/amarnath_yatra_2023_rims.jpeg',
      about: 'Compulsory health certificate_rims.pdf',
    },
    {
      image: 'assets/homeCard1/mrt_2023_bnr.jpeg',
      about: 'Admission open limited seat available_2023.pdf',
    },
    {
      image: 'assets/homeCard1/ragg.jpeg',
      about: 'Ragging is a crime_rims.pdf',
    },
    {
      image: 'assets/homeCard1/amns_desc.jpeg',
      about: 'Requirement for Medical Colleges ',
    },
    {
      image: 'assets/homeCard1/bnr_bdy_dntn copy.jpeg',
      about: 'Help Line Services',
    },
    {
      image: 'assets/homeCard1/bnr_bdy_dntn.jpeg',
      about: 'Microsoft Word - Body Donation Form DEPARTMENT OF ANATOMY',
    },
    {
      image: 'assets/homeCard1/call_nos_bnr.jpeg',
      about: 'Help Line Services',
    },
    { image: 'assets/homeCard1/dent_img.jpeg', about: 'RIMS Dental Institute' },
    // { image: 'assets/homeCard1/harascopy.jpeg' },
  ];
}
