import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from '../../../types/poem';
import { PoemService } from '../../../service/poem.service';
import { PoemViewComponent } from '../poem-category-view/poem-view.component';
@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.scss'
})
export class PoemComponent {

  poem: Poem = {} as Poem;
  poems: Poem[] = [] as Poem[];
  index: number = 0;


  constructor(private router: Router, private service: PoemService) { }

  indexUp(): void {
    if (this.index <= this.poems.length - 2 || this.index !== this.poems.length - 2)
      this.index = this.index + 2;
    else if (this.index == this.poems.length - 1)
      return;
    this.index = this.index + 1;
  }

  indexDown(): void {
    if (this.index >= 2)
      this.index = this.index - 2;
    else if (this.index == 1)
      this.index = this.index - 1;
    return;
  }

  indexInitial(): void {
    this.index = 0;
  }

  ngOnInit(): void {
    this.poems = this.service.getPoemsByCategory('Leben');
  }

  mapPoems() {

  }

}

