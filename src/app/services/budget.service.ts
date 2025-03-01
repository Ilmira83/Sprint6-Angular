import { Injectable } from '@angular/core';
import { Budget } from '../interface/budget';
import { Panel } from '../interface/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  getServices(): Budget[] {
    return [
      { title: 'Seo',
        description: 'Complete creation of responsive WEB',
        price: 300,
        id: 0,
      },
      { title: 'Ads',
        description: 'Complete creation of responsive WEB',
        price: 400,
        id: 1,
      },
      { title: 'Web',
        description: 'Complete creation of responsive WEB',
        price: 500,
        id: 2,
      },
    ]

    
    }
  getPanelData(): Panel[] {
    return [
      {
        title: 'Number of pages:',
        quantity: 0,
        price: 30
      },
      {
        title: 'Number of languages:',
        quantity: 0,
        price: 30
      }
    ]
  }

  

  constructor() { }




}


