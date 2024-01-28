import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInterchangeService {

  private data = new BehaviorSubject<string>('Leben');
  data$ = this.data.asObservable();

  constructor() { }

  changeData(value: string){
    this.data.next(value);
  }

}
