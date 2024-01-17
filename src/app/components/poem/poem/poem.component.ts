import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.scss'
})
export class PoemComponent {

    constructor(private router:Router){}

    onInit(): void{
      window.scrollTo(0,10000);
    }

    home(){
      this.router.navigateByUrl('/');
    }
}
