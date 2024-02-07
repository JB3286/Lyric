import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from '../../../types/navigation-item';
import { DataInterchangeService } from '../../../services/data-interchange.service';

@Component({
  selector: 'navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {

  category = '';
  poemsToggle = false;
  aboutToggle = false;
  arrowLeft = '../../../../assets/icons/1dropdown-arrow-left.png';
  arrowDown = '../../../../assets/icons/1dropdown-arrow-down.png';
 
  @Input() navItem: NavigationItem = {} as NavigationItem;

  constructor(private router: Router, private interChange: DataInterchangeService ) { }

  changeData(category: string){
    this.interChange.changeData(category);
  }

  togglePanel(title: string):void{
    switch(title){
    case 'Gedichte':
      this.poemsToggle = !this.poemsToggle;
      break;
    case 'Über mich':
      this.aboutToggle = !this.aboutToggle;
      break;  
    default:
      break;
    }
  }

  ngOnInit(): void {
    this.interChange.data$.subscribe(data=>{
      this.category = data;
    })
  }
}
