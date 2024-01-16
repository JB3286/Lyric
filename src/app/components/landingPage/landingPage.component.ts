import { Component } from '@angular/core';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'landingPage',
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss'
})
export class LandingPageComponent {

  author = "Andreas Chilinsky";
  domain = "www.Andreas-Chilinsky.de"; 

}
