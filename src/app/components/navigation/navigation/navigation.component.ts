import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(private routes: Router){}

  hello(){
    this.routes.navigateByUrl('hello');
  }
}
