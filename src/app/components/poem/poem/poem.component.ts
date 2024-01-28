import { Component, ElementRef, OnChanges, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from '../../../types/poem';
import { PoemService } from '../../../services/poem.service';
import { ActivatedRoute } from '@angular/router';
import { DataInterchangeService } from '../../../services/data-interchange.service';


@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.scss'
})
export class PoemComponent implements OnInit {

  poem: Poem = {} as Poem;
  poems: Poem[] = [] as Poem[];
  data: string[] = []
  category: string = '';
  index: number = 0;
  odd: boolean = false;

  constructor(private router: Router, private service: PoemService, private activeRoute: ActivatedRoute, private dataInterchange: DataInterchangeService) { }

  indexUp(): void {
    if (this.index <= this.poems.length - 2) {
      this.index = this.index + 2;
    } else if (this.index < this.poems.length - 1) {
      this.index = this.index + 1;
    }
    return;
  }

  isOdd(array: Poem[]): void { 
    if(array.length%2 == 0)
      !this.odd;
      console.log(this.odd);
      this.odd = false;
  }

  indexDown(): void {
    if (this.index >= 2) {
      this.index = this.index - 2;
    }
    else if (this.index == 1) {
      this.index = this.index - 1;
    }
    return;
  }


  indexInitial(): void {
    this.index = 0;
  }

  setCategory() {
    this.dataInterchange.data$.subscribe(data => {
      this.category = data;
      this.index = 0;
      this.poems = [];
      this.poems = this.service.getPoemsByCategory(this.category);
      this.isOdd(this.poems);
      console.log(data);
      console.log(this.poems);
    });
  }

  ngOnInit(): void {
    this.setCategory();
  }

  mapPoems() {

  }

}

