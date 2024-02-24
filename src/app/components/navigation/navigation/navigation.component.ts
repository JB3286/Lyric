import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from '../../../types/navigation-item';
import { DataInterchangeService } from '../../../services/data-interchange.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {

  category = '';

  constructor(private routes: Router, private interChange: DataInterchangeService) { }

  navItems: NavigationItem[] = [
    {
      title: 'Gedichte', route:'/poems/all', subNavigation: [
        { title: 'Leben', route: '/poems/life' },
        { title: 'Liebe', route: '/poems/love' },
        { title: 'Erotisches', route: '/poems/erotics' },
        { title: 'Philosophisches', route: '/poems/philosophics' },
        { title: 'Religiöses', route: '/poems/religious' },
        { title: 'Tod', route: '/poems/death' },
        { title: 'Personifiziertes', route: '/poems/humans' },
        { title: 'Anhang', route: '/poems/appendix' },
        { title: 'Inhaltsverzeichnis', route: '/poems/all' },
        { title: 'Lesungen', route: '/poems/readings' },
      ]
    },
    {
      title: 'Über mich', route: '/about', subNavigation: [
        
        { title: 'Zu den Gedichten', route: '/about/poems' },
      ]
    },
    { title: 'Über den',subNavigation:[
      {title: 'Bildkünstler', route:'/about/artist'},
      {title: 'Webentwickler', route:'/about/programmer'}
    ] },
    
    { title: 'Kommentar', route: '/comments' },
    

  ];

  changeData(data: string) {
    this.interChange.changeData(data);
  }

  ngOnInit(): void {
  }
}

