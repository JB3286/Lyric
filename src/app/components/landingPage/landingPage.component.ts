import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'landingPage',
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss'
})
export class LandingPageComponent {

  author = "Andreas Chilinsky";
  domain = "www.Andreas-Chilinsky.de"; 

  constructor(private router: Router){}

  onInit(): void{
    window.scrollTo(0,0);
  }

  hello(){
    this.router.navigateByUrl('hello');
  }

}
