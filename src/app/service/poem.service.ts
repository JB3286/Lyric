import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Poem } from '../types/poem';


@Injectable({
  providedIn: 'root'
})
export class PoemService {

  poemCategorised: Poem[] = []


  poems: Poem[] = [
    { id: "0", date: "17.01.2024", title: "2024", subtitle: "Version XI", category: "Leben", content: ["2 Marder werden", "20 Rabenkrähen fressen", "", "20 Rabenkrähen werden", "202 Florfliegenlarven fressen", "", "202 Florfliegenlarven werden", "2024 Läuse fressen", "", "und so fort", "und in den Jahren davor", "", "Fressen und Gefressenwerden", "ist die Lehr", "", "dass es bei Menschen anders sei", "eine Mär", "", "wer Heile-Heile glaubt", "ist ein Tor", "", "man frisst mit Missgunst", "und mit Empathielosigkeit", "und mit Ungerechtigkeit", "und mit Hass", "und mit Geld", "und mit Macht", "und mit Waffen",], comments: "(01.01.20, 01.01.21, 10.10.23: Umstellung Verse der vorletzten Strophe, Wechsel letzte/vorletzte Strophe, 06.01.24: Jahresaktualisierung)" },
    { id: "1", date: "27.01.2016", title: "Lebens-Heiterkeit", subtitle: "", category: "Leben", content: ["Sieh dein Leben heiter,", "irgendwann geht's weiter!", "", "Hat man wenigstens gelacht,", "dann hat man's recht gemacht!", "", "Das sagen die Leute,", "so denkt man heute.", "", "Vertreibe die Sorgen", "es kommt ein Morgen!", "", "Doch ist ist's so gut gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "Sieh dein Leben heiter,", "irgendwann geht's nicht weiter!"], comments: "" },
    { id: "2", date: "27.01.2016", title: "irgendwas", subtitle: "huh", category: "Philosophisches", content: ["Sben heiter,", "irgeneiter!", "", "Hat man wenigstens gelacht,", "dann hht!", "", "Daseute,", "so dene.", "", "Vgen", "es kommt ein Morgen!", "", "Doch ist ist's so gut gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "ter,", "eht's nicht weiter!"], comments: "" },
    { id: "3", date: "27.01.2016", title: "LSuckkmwmndwkeit", subtitle: "", category: "Leben", content: ["Sdweeiter,", "irgeDweeht's weiter!", "", "Dstens gelacht,", "dannemacht!", "", "Da die Leute,", "soan heute.", "", "Ve die Sorgen", "es orgen!", "", "Doch  gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "Sieh dein Leben heiter,", "irgendwann geht's nicht weiter!"], comments: "" },
    { id: "3", date: "27.01.2016", title: "it", subtitle: "", category: "Leben", content: ["Sdweeiter,", "irgeDweeht's weiter!", "", "Dstens gelacht,", "dannemacht!", "", "Da die Leute,", "soan heute.", "", "Ve die Sorgen", "es orgen!", "", "Doch  gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "Sieh dein Leben heiter,", "irgendwann geht's nicht weiter!"], comments: "" },
    { id: "3", date: "27.01.2016", title: "kajshhdhdhdhdhdh", subtitle: "fefefefefef", category: "Leben", content: ["Sdweeiter,", "irgeDweeht's weiter!", "", "Dstens gelacht,", "dannemacht!", "", "Da die Leute,", "soan heute.", "", "Ve die Sorgen", "es orgen!", "", "Doch  gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "Sieh dein Leben heiter,", "irgendwann geht's nicht weiter!"], comments: "" },
  ] as Poem[];

  constructor() { }

  getPoems(): Poem[] {
    return this.poems;
  }

  getPoemByTitle(title: string): Poem {    
    var poem: Poem = {} as Poem;
    
    this.poems.forEach(obj => {
     Object.entries(obj).map(([propertie,value])=>{
        if(propertie === 'title' && value===title)
          poem = obj;
     })
    })
      return poem;
  }

  getPoemsByCategory(category: string): Poem[]{
    var poems: Poem[] = [];
    
    this.poems.forEach(obj => {
      Object.entries(obj).map(([propertie, value]) =>{
        if(propertie === 'category' && value===category){
        poems.push(obj);
        }
      })
    })
    console.log(poems);
    return poems;
  }



}
