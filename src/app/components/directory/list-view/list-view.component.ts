import { Component } from '@angular/core';
import { ListItem } from '../../../types/list-item';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {

categoryItem: ListItem = {} as ListItem;
categoryItems: ListItem[] = [];




}
