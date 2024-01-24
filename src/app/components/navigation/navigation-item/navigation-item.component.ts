import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from '../../../types/navigation-item';


@Component({
  selector: 'navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {

  navigationItem: NavigationItem = {} as NavigationItem;
 
  @Input() navItem: NavigationItem = this.navigationItem;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }




}
