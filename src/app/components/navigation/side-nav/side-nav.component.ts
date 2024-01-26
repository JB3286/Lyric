import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  constructor(private router: Router){}

  about(){
    this.router.navigateByUrl('about');
  }


}
