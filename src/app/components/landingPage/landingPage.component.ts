import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'landingPage',
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss'
})
export class LandingPageComponent {

  author: string = "Andreas Chilinski";
  domain: string = "Lebensrauschen"; 

  constructor(private router: Router){}

  onInit(): void{
  }

}
