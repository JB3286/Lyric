import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {

  @Input() title:string = '';
  @Input() url: string = '';

  tabindex: number = 0;

  constructor(){}

  setTabIndex(): string{
    this.tabindex+1;
    return this.tabindex.toString();
  }

  ngOnInit(): void{
    this.tabindex = 0;
  }

}
