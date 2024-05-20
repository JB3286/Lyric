import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Poem } from '../types/poem';


@Injectable({
  providedIn: 'root'
})
export class PoemService {

  poems: Poem[] = [];

  API_URL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  poemCategorised: Poem[] = []

  constructor(private http: HttpClient) { }

  getPoemsAPI(): Observable<Poem>{ 
    console.log('Service');
    return this.http
    .get<Poem>(this.API_URL+"/poems")
    .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: ErrorEvent){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else{
      errorMessage = `Ein Fehler ist aufgetreten: ${error.error.status}/n Fehlermeldung: ${error.error.message} `;
    }
  window.alert(errorMessage);
  return throwError(()=> {
    return errorMessage 
  });
  }

  /*

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
*/
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

