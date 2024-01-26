import { Component, Input } from '@angular/core';
import { Poem } from '../../../types/poem';

@Component({
  selector: 'poem-view',
  templateUrl: './poem-view.component.html',
  styleUrl: './poem-view.component.scss'
})
export class PoemViewComponent {

  @Input() inputePoem: Poem = {} as Poem;
  poem: Poem = { id: "2", date: "27.01.2016", title: "irgendwas", subtitle: "huh", category: "Philosophisches", content: ["Sben heiter,", "irgeneiter!", "", "Hat man wenigstens gelacht,", "dann hht!", "", "Daseute,", "so dene.", "", "Vgen", "es kommt ein Morgen!", "", "Doch ist ist's so gut gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "ter,", "eht's nicht weiter!"], comments: [] }


  constructor() {  }
}
