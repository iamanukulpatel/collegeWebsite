import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
})
export class HomeCarouselComponent implements OnInit, OnChanges {
  allData: any = [];
  alert: boolean = false;
  class: boolean = false;
  ngOnInit(): void {
    this.allData = this.rims;
  }
  ngOnChanges(changes: SimpleChanges): void {}

  rims = [
    {
      date: '1/11/2023',
      rims: 'List of candidates passed in the Ph. D Entrance Test - 2022-23 Examination held in the month of Feb. 2023, RIMS, Ranchi',
    },
    {
      date: '2/1/2022',
      rims: 'Office Order - List of selected candidates and details for Short term fellowship program in Good Clinical Practice, RIMS Ranchi, Memo No. 1571A, Dtd: 10-04-23',
    },
    {
      date: '26/4/2023',
      rims: 'Circular - Training for Medical Record Technician (MRT) for the Session 1st July to 31st December 2023',
    },
    { date: '21/5/2023', rims: 'Biomedical Waste Report 2022' },
    {
      date: '22/3/2023',
      rims: 'Income Tax Schedule Format, Assessment Year : 2023-24, FY : 2022-23',
    },
    {
      date: '2/11/2022',
      rims: 'SOP for Institutional Ethics Committee, RIMS, Ranchi, Version 5.0, Dated-21-02-2022',
    },
  ];

  tenderss = [
    {
      rims: 'Sealed Quotation are invited from Registered Suppliers for supply of different surgical items at CTVS Department, RIMS Ranchi, Quotation No 319C Dated 25/04/2023 (Ayushman Bharat - Pradhanmantri Jan Aarogya Yojna)',
    },
    {
      rims: 'Sealed Quotation are invited from Registered Suppliers for supply of different surgical items at CTVS Department, RIMS Ranchi, Quotation No 319B Dated 25/04/2023 (Ayushman Bharat - Pradhanmantri Jan Aarogya Yojna)',
    },
    {
      rims: 'Sealed Quotation are invited from Registered Suppliers for supply of different surgical items at CTVS Department, RIMS Ranchi, Quotation No 319A Dated 25/04/2023 (Ayushman Bharat - Pradhanmantri Jan Aarogya Yojna)',
    },
  ];
  recruitment = [
    {
      rims: 'Walk-in Interview Result for the post of Infection Control Nurse (NCDC/HAI/AMR) ',
    },
    {
      rims: 'Walk-in Interview Result for the post of Field Worker (NCDC/NVHSP) ',
    },
    {
      rims: 'Walk in Interview for filling up of following post under the NCDC Umbrella Scheme in National Viral Hepatitis Surveillance Programme (NVHSP), Dept. of Microbiology, RIMS, Ranchi, Jharkhand',
    },
    {
      rims: 'Walk in Interview for filling up of following post under the NCDC Umbrella Scheme, HAI Surveillance, National Programme on Antimicrobial Resistance Containment, Dept. of Microbiology, RIMS, Ranchi, Jharkhand',
    },
  ];

  default() {
    this.allData = this.rims;
  }
  recuit() {
    this.allData = this.recruitment;
  }
  tenders() {
    this.allData = this.tenderss;
  }
  result() {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 2000);
  }
}
