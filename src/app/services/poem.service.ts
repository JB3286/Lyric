import { Injectable } from '@angular/core';
import { Poem } from '../types/poem';


@Injectable({
  providedIn: 'root'
})
export class PoemService {

  poemCategorised: Poem[] = []


  poems: Poem[] = [
    { id: "0", date: "17.01.1985", title: "2024", subtitle: "Version XI", category: "Leben", content: ["2 Marder werden", "20 Rabenkrähen fressen", "", "20 Rabenkrähen werden", "202 Florfliegenlarven fressen", "", "202 Florfliegenlarven werden", "2024 Läuse fressen", "", "und so fort", "und in den Jahren davor", "", "Fressen und Gefressenwerden", "ist die Lehr", "", "dass es bei Menschen anders sei", "eine Mär", "", "wer Heile-Heile glaubt", "ist ein Tor", "", "man frisst mit Missgunst", "und mit Empathielosigkeit", "und mit Ungerechtigkeit", "und mit Hass", "und mit Geld", "und mit Macht", "und mit Waffen",], comments: ["(01.01.20, 01.01.21, 10.10.23: Umstellung Verse der vorletzten Strophe, Wechsel letzte/vorletzte Strophe, 06.01.24: Jahresaktualisierung)",] },
    { id: "1", date: "27.01.1993", title: "Lebens-Heiterkeit", subtitle: "", category: "Leben", content: ["Sieh dein Leben heiter,", "irgendwann geht's weiter!", "", "Hat man wenigstens gelacht,", "dann hat man's recht gemacht!", "", "Das sagen die Leute,", "so denkt man heute.", "", "Vertreibe die Sorgen", "es kommt ein Morgen!", "", "Doch ist ist's so gut gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "Sieh dein Leben heiter,", "irgendwann geht's nicht weiter!"], comments: [] },
    { id: "2", date: "27.01.1999", title: "Mirgendwas", subtitle: "huh", category: "Philosophisches", content: ["Sben heiter,", "irgeneiter!", "", "Hat man wenigstens gelacht,", "dann hht!", "", "Daseute,", "so dene.", "", "Vgen", "es kommt ein Morgen!", "", "Doch ist ist's so gut gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "ter,", "eht's nicht weiter!"], comments: [] },
    { id: "3", date: "27.01.2003", title: "LSuckkmwmndwkeit", subtitle: "", category: "Leben", content: ["Sdweeiter,", "irgeDweeht's weiter!", "", "Dstens gelacht,", "dannemacht!", "", "Da die Leute,", "soan heute.", "", "Ve die Sorgen", "es orgen!", "", "Doch  gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "Sieh dein Leben heiter,", "irgendwann geht's nicht weiter!"], comments: [] },
    { id: "4", date: "27.01.2007", title: "Zt", subtitle: "", category: "Leben", content: ["Sdweeiter,", "irgeDweeht's weiter!", "", "Dstens gelacht,", "dannemacht!", "", "Da die Leute,", "soan heute.", "", "Ve die Sorgen", "es orgen!", "", "Doch  gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "Sieh dein Leben heiter,", "irgendwann geht's nicht weiter!"], comments: "" },
    { id: "5", date: "27.01.2000", title: "BE", subtitle: "Tod", category: "Tod", content: ["Sdweeiter,", "irgeDweeht's weiter!", "", "Dstens gelacht,", "dannemacht!", "", "Da die Leute,", "soan heute.", "", "Ve die Sorgen", "es orgen!", "", "Doch  gedacht?", "Schau! Hab acht!", "Der Clown, der weise", "der sagt dem Weisen leise:", "", "Sieh dein Leben heiter,", "irgendwann geht's nicht weiter!"], comments: [] }, {
      id: "6", date: "06.07.1998", title: "Ich wünsche Dir, dass Du glücklich bist", subtitle: "an S.", category: "Leben", content: [
        "Tausend mal tausend Mal","hast Du mich getötet.","Getötet und getötet und getötet,","getötet. Getötet.","","Und doch liebe ich Dich.","Ich werde Dich immer lieben!","Denn wahrhafte Liebe","braucht keine Erwiderung;","sie will das Glück der Geliebten (des Geliebten).","","Bist Du nun glücklich?","Ich wünsche es Dir!","Denn ich liebe Dich,","ich liebe Dich,","ich liebe Dich!","","Du tötest mich,","ich aber liebe Dich!","Immer werde ich Dich lieben!","Wenn Du wiederkommst, liebe ich Dich!","Ich wünsche Dir, dass Du glücklich bist!","","Jahre sind vergangen,","sechzehn mal ein Jahr…","","Nicht tausend mal tausend Mal","hast Du mich also getötet, sondern","sechzehn mal dreihundertfünfundsechzig","mal sechzehn Wachstunden (etwa)","mal sechzig mal sechzig Mal!","","Sechzehn mal dreihundertfünfundsechzig","mal sechzehn mal sechzig mal sechzig Mal","habe ich Dich weitergeliebt.","Sechzehn mal sechzehn","mal dreihundertfünfundsechzig Tage","werde ich Dich weiterlieben!","","Bitter geweint hatte ich","eine Zeit,","aber Dir immer gewünscht,","dass Du glücklich bist.","","Bist Du nun glücklich?","Ich wünsche Dir, dass Du glücklich bist!","","Du könntest mich wiederbeleben…","Nur meine Liebe pocht noch, lebt noch.","Aber ich möchte, dass Du glücklich bist!","Denn ich liebe Dich.",
      ],comments: []
    }
   
  ] as Poem[];

  constructor() { }

  getPoems(): Poem[] {
    return this.poems;
  }

  getPoemById(id: string): Poem {
    var poem: Poem = {} as Poem;
    this.poems.forEach(obj => {
      Object.entries(obj).map(([propertie, value]) => {
        if (propertie === 'id' && value === id)
          poem = obj;
        return poem;
      })
    })
    return poem;
  }

  getPoemByTitle(title: string): Poem {
    var poem: Poem = {} as Poem;
    this.poems.forEach(obj => {
      Object.entries(obj).map(([propertie, value]) => {
        if (propertie === 'title' && value === title)
          poem = obj;
        return poem;
      })
    })
    return poem;
  }

  getPoemsByCategory(category: string): Poem[] {
    var poems: Poem[] = [];
    this.poems.forEach(obj => {
      Object.entries(obj).map(([propertie, value]) => {
        if (propertie === 'category' && value === category) {
          poems.push(obj);
        }
      })
    })
    return poems;
  }


}

