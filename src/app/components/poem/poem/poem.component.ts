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

  poem: Poem = {} as Poem;
  poems: Poem[] = [] as Poem[];

  strings: string[] = [
    "2 Marder werden 20 Rabenkrähen fressen",
    "20 Rabenkrähem werden",
    "30 Mütter werden gefickt",
    "",
    "",
    "Fick deinen Vater",
  ];

  getArrayAccess(): string[]{
    return this.poem.content;
  }


    constructor(private router:Router){
      this.poem = { id:"0", date:"17.01.2024",title:"2024", category:"Philsophisches",content:["2 Marder werden 20 Rabenkrähen fressen","20 Rabenkrähem werden","30 Mütter werden grifkt","","","Fick deinen Vater"] ,comments:"(01.01.20, 01.01.21, 10.10.23: Umstellung Verse der vorletzten Strophe, Wechsel letzte/vorletzte Strophe, 06.01.24: Jahresaktualisierung)"}
    }

    onInit(): void{
      console.log(this.poem.content);
    }

    home(){
      this.router.navigateByUrl('/');
    }



  }
