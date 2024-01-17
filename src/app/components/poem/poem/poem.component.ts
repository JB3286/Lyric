import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.scss'
})
export class PoemComponent {

    constructor(private router:Router){}

    home(){
      this.router.navigateByUrl('/');
    }
}
