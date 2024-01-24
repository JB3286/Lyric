import { Component } from '@angular/core';
import { FooterItem } from '../../../types/footer-item';
import { Input } from '@angular/core';

@Component({
  selector: 'footer-item',
  templateUrl: './footer-item.component.html',
  styleUrl: './footer-item.component.scss'
})
export class FooterItemComponent {

  @Input() inputItem: FooterItem = {} as FooterItem;

}
