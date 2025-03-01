import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InforalertService {

  constructor() { }

  mess = signal<string>('')

  showInfo(info:string){
    this.mess.set(info) 
  }

}
