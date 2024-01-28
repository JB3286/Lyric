import { Component, Input } from '@angular/core';
import { Poem } from '../../../types/poem';

@Component({
  selector: 'poem-view',
  templateUrl: './poem-view.component.html',
  styleUrl: './poem-view.component.scss'
})
export class PoemViewComponent {

  @Input() inputPoem: Poem = {} as Poem;

  constructor() {  }
}
