import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {

  @Input() title:string = '';
  @Input() url: string = '';
  @Input() route: string = '';

  tabindex: number = 0;

  constructor(private routes: Router){}

  setTabIndex(): string{
    this.tabindex+1;
    return this.tabindex.toString();
  }

  hello(){
    this.routes.navigateByUrl('hello');
  }
  
  
  ngOnInit(): void{
    this.tabindex = 0;
  }




}
