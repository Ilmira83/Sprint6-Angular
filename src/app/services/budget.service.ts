import { Injectable } from '@angular/core';
import { Budget } from '../interface/budget';

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

  

  constructor() { }




}
