import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataInterchangeService } from '../../../services/data-interchange.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit {

  category = '';
  
  constructor(private router: Router, private dataInterchange: DataInterchangeService){}

  setCategory(value: string){
    this.dataInterchange.changeData(value);
  }

  listView(){
    this.dataInterchange.setToList(true);
  }
  
  hideListView():void{
    this.dataInterchange.setToList(false);
  }


  ngOnInit(): void{
    this.dataInterchange.data$.subscribe(data =>{
      this.category = data;
    })
  }


 

}
