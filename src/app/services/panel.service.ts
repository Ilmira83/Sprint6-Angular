import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  showPanel = signal(false);

  constructor() {}
  
}
