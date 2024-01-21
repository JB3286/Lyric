import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from '../../../types/poem';
import { OnInit } from '@angular/core';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.scss'
})
export class PoemComponent {

  index: number = 0;
  poem: Poem = {} as Poem;
  
  poems: Poem[] = [
    {id: "0", date: "17.01.2024", title: "2024", subtitle: "Version XI", category: "Philosophisches", content: ["2 Marder werden", "20 Rabenkrähen fressen", "", "20 Rabenkrähen werden", "202 Florfliegenlarven fressen", "", "202 Florfliegenlarven werden", "2024 Läuse fressen", "", "und so fort", "und in den Jahren davor", "", "Fressen und Gefressenwerden", "ist die Lehr", "", "dass es bei Menschen anders sei", "eine Mär", "", "wer Heile-Heile glaubt", "ist ein Tor", "", "man frisst mit Missgunst","und mit Empathielosigkeit","und mit Ungerechtigkeit","und mit Hass","und mit Geld","und mit Macht","und mit Waffen",], comments: "(01.01.20, 01.01.21, 10.10.23: Umstellung Verse der vorletzten Strophe, Wechsel letzte/vorletzte Strophe, 06.01.24: Jahresaktualisierung)"},
    {id: "1", date:"27.01.2016", title:"Lebens-Heiterkeit",subtitle:"",category:"Leben", content:["Sieh dein Leben heiter,","irgendwann geht's weiter!","","Hat man wenigstens gelacht,","dann hat man's recht gemacht!","","Das sagen die Leute,","so denkt man heute.","","Vertreibe die Sorgen","es kommt ein Morgen!","","Doch ist ist's so gut gedacht?","Schau! Hab acht!","Der Clown, der weise","der sagt dem Weisen leise:","","Sieh dein Leben heiter,","irgendwann geht's nicht weiter!"], comments:""},
  ] as Poem[];

  getContentAccess(): string[] {
    return this.poem.content;
  }

  iterateIndex():void{
    if(this.index<=this.poems.length-1){
    this.index++;
    this.poem = this.poems[this.index];
    }
  }
  iterateIndexBackwards(): void{
    if(this.index!=0){
    this.index--;
    this.poem = this.poems[this.index];
    }
  }

  constructor(private router: Router) {
    this.poem = {
      id: "0", date: "17.01.2024", title: "2024", subtitle: "Version XI", category: "Philosophisches", content: ["2 Marder werden", "20 Rabenkrähen fressen", "", "20 Rabenkrähen werden", "202 Florfliegenlarven fressen", "", "202 Florfliegenlarven werden", "2024 Läuse fressen", "", "und so fort", "und in den Jahren davor", "", "Fressen und Gefressenwerden", "ist die Lehr", "", "dass es bei Menschen anders sei", "eine Mär", "", "wer Heile-Heile glaubt", "ist ein Tor", "", "man frisst mit Missgunst","und mit Empathielosigkeit","und mit Ungerechtigkeit","und mit Hass","und mit Geld","und mit Macht","und mit Waffen",], comments: "(01.01.20, 01.01.21, 10.10.23: Umstellung Verse der vorletzten Strophe, Wechsel letzte/vorletzte Strophe, 06.01.24: Jahresaktualisierung)"
    }
  }

  onInit(): void {
    console.log(this.poem.content);
  }

  home() {
    this.router.navigateByUrl('/');
  }



}
