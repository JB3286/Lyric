import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from '../../../types/navigation-item';
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {

  
  constructor(private routes: Router){}

  navItems: NavigationItem[]  = [
    {title:'Gedichte',subNavigation: [
      {title:'Leben',route:'poems/life'},
      {title:'Liebe',route:'poems/love'},
      {title:'Erotisches',route:'poems/erotics'},
      {title:'Philosophisches',route:'poems/philosophics'},
      {title:'Religiöses',route:'poems/religious'},
      {title:'Tod',route:'poems/death'},
      {title:'Inhaltsverzeichnis',route:'poems/content'},
      {title:'Anhang',route:'poems/appendix'},
    ]},
    {title:'Über mich',subNavigation: [
      {title:'Zu den Gedichten',route:'about/poems'},
      {title:'Lesungen',route:'about/readings'}
    ]},
    {title:'Kommentar',subNavigation:[
      {title:'Über den Bildkünstler',route:'comment/artist'},
      {title:'Über den Webdesigner', route:'comment/programmer'}
    ]},
    {title:'Mail',route:'contact'},
  ];

  ngOnInit():void{
  }
}

