import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {

  constructor(private routes: Router){}

  navItemsTitle: string[]  = [
   "Gedichte", 
   "Über mich", 
   "Kommentare", 
   "Kontakt", 
  ];

  navItemsUrl: string[] = [
    "../../../assets/icons/poem_50x50.jpg",
    "../../../assets/icons/aboutMe_50x50.jpg",
    "../../../assets/icons/comments_50x50.jpg",
    "../../../assets/icons/contact_50x50.jpg",
  ]

  navItemRoutes: string[] = [
    "poems",
    "about",
    "/",
    "/",
  ]

  icons: string[] = [
    "bi bi-arrow-down"
  ]

  ngOnInit():void{
  }
}
