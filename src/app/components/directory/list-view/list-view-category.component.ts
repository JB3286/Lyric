import { Component } from '@angular/core';
import { ListItem } from '../../../types/list-item';
import { PoemService } from '../../../services/poem.service';
import { Poem } from '../../../types/poem';
import { DataInterchangeService } from '../../../services/data-interchange.service';

@Component({
  selector: 'list-view',
  templateUrl: './list-view-category.component.html',
  styleUrl: './list-view-category.component.scss'
})
export class ListViewCategoryComponent {

  categoryItems: ListItem[] = [];
  poems: Poem[] = [];
  category: string = '';
  dateAscending: boolean = false; 
  filteredEntries: boolean = false;

  constructor(private service: PoemService, private dataInterchange: DataInterchangeService) { }

  createListItems(poems: Poem[]): ListItem[] {
    let listItem: ListItem[] = [];
    Object.keys(poems).map((entry) => {
      let item: ListItem = {} as ListItem
      Object.entries(poems[(parseInt(entry))]).map(([key, value]) => {
        if (key === "id") {
          item.id = value;
        } else if (key === 'title') {
          item.title = value;
        } else if (key === 'date') {
          item.date = value
        } if (key === "category") {
          item.category = value;
        }
      });
      listItem.push(item);
    })
    return listItem;
  }

  sortTitleAscending(items: ListItem[]): ListItem[] {
    return items.sort(function (a, b) :number {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    })
  }

  sortDateAscending(items: ListItem[]): ListItem[]{
    console.log('Iam Ascending');
    this.dateAscending = true;
    return this.categoryItems = items.sort(function(a,b) :number{
      return a.date.localeCompare(b.date);
    })
  }

  sortDateDescending(items: ListItem[]): ListItem[]{
    console.log('Iam Descending');
    this.dateAscending = false;
    return items.sort(function(a,b) :number{
      return b.date.localeCompare(a.date);
    })
  }

  dateSorter(): void{
    if(this.dateAscending == true){
      this.categoryItems = this.sortDateDescending(this.categoryItems);
    }else{
      this.categoryItems = this.sortDateAscending(this.categoryItems);
    }
  }

  changeCategory(category: string): void {
    this.filteredEntries = true;
    this.dataInterchange.changeData(category);
    this.dataInterchange.data$.subscribe(data => {
      this.category = data;
    })
    this.categoryItems = this.createListItems(this.service.getPoemsByCategory(this.category));
  }

  removeFilter(): void{
    this.categoryItems = this.createListItems(this.service.getPoems());
    this.filteredEntries = false;
  }


  ngOnInit(): void {
    this.dataInterchange.data$.subscribe(data => {
      this.category = data;
    })
    this.categoryItems = this.sortTitleAscending(this.createListItems(this.service.getPoems()));
    console.log(this.categoryItems);
    console.log(this.dateAscending);
  }
}
