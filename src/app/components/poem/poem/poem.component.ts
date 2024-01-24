import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from '../../../types/poem';
import { PoemService } from '../../../service/poem.service';


@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.scss'
})
export class PoemComponent {

  poem: Poem = {} as Poem;
  poems: Poem[] = [] as Poem[];
  lastPoem: boolean = false;
  index: number = 0;

  constructor(private router: Router, private service: PoemService) { }

  setPoem(poem: Poem): void {
    this.poem = this.poems[0];
  }

  getContentAccess(): string[] {
    return this.poem.content;
  }

  indexUp(): void {
    if (this.index < this.poems.length - 1) {
      this.index++;
      this.poem = this.poems[this.index];
    }
  }
  
  indexDown(): void {
    if (this.index != 0) {
      this.index--;
      this.poem = this.poems[this.index];
    }
  }

  ngOnInit(): void {
    this.poems = this.service.getPoems();
  }

  home() {
    this.router.navigateByUrl('/');
  }

}
