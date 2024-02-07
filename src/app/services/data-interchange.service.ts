import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInterchangeService {

  private data = new BehaviorSubject<string>('Leben');
  data$ = this.data.asObservable();

  private isList = new BehaviorSubject<boolean>(false);
  list$ = this.isList.asObservable();

  constructor() { }

  changeData(value: string){
    this.data.next(value);
  }

  setToList(bool: boolean){
    this.isList.next(bool);
  }

}
