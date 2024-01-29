import { Component } from '@angular/core';
import { ListItem } from '../../../types/list-item';
import { PoemService } from '../../../services/poem.service';
import { Poem } from '../../../types/poem';


@Component({
  selector: 'list-view',
  templateUrl: './list-view-category.component.html',
  styleUrl: './list-view-category.component.scss'
})
export class ListViewCategoryComponent {

categoryItems: ListItem[] = [];
poems: Poem[] = [];
category = '';

constructor(private service: PoemService){}

createListItems(poems: Poem[]): ListItem[]{
  let listItem: ListItem[] = [];
  Object.keys(poems).map((entry)=>{
    let item: ListItem = {} as ListItem
    Object.entries(poems[(parseInt(entry))]).map(([key,value])=>{
      if(key ==="id"){
        item.id=value;
      }else if(key==='title'){
        item.title=value;
      }else if(key==='date'){
        item.date = value
      }if(key==="category"){
        item.category = value;
      }
    });
    listItem.push(item);
  })
  return listItem;
}

ngOnInit(): void{
  this.poems = this.service.getPoemsByCategory('Leben');
  this.category = this.poems[0].category;
  this.categoryItems = this.createListItems(this.poems);
  console.log(this.categoryItems)
}



}
