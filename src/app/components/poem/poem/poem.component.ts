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
    this.index = this.index+2;
  }
  
  indexDown(): void {
    this.index = this.index-2;    
  }

  getAllPoems(): void{
    this.poems = this.service.getPoems();
  }

  getPoemsByCategory(category: string){
    this.poems = this.service.getPoemsByCategory(category);
  }

  getPoemByTitle(title: string){
    this.poem = this.service.getPoemByTitle(title);
  }

  ngOnInit(): void {
    this.getPoemsByCategory('Leben');
  }

  
}
