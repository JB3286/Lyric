import { Component } from '@angular/core';
import { FooterItem } from '../../../types/footer-item';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerItems: FooterItem[] = [
    { title: 'Datenschutzhinweise', route: 'privacy' },
    { title: 'Impressum', route: 'legal' },
  ]

  constructor(private router: Router) { }


  ngOnInit(): void { }

}
