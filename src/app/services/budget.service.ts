import { computed, Injectable, signal } from '@angular/core';
import { Budget, savedBudgets } from '../interface/budget';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {


  pages = signal<number>(0);
  langs = signal<number>(0);
  panelPrice = signal<number>(0);
  finalBudget = signal<number[]>([]);
  totalPrice = signal<number>(0)
  savedServices = signal<string[]>([]);
  name = signal<string>('')
  email = signal<string>('')
  nPhone = signal<number>(0)
  allSavedBudgets = signal<savedBudgets[]>([])

  calcPanelPrice=() => this.panelPrice.set(this.pages() * this.langs() * 30)

  saveToArray=() => this.finalBudget.update((v) => [...v, this.panelPrice()]);

  resetValues() {
    this.pages.set(0);
    this.langs.set(0);
    this.panelPrice.set(0);
  }

  getSavedServices():savedBudgets[] {
    return [
      { name: this.name(),
        email: this.email(),
        phone: this.nPhone(),
        service: this.savedServices(),
        totPrice: this.totalPrice()
      },
    ]
  }
  
  getTotalSavedServices(){
    this.allSavedBudgets.update(v=> [...v, ...this.getSavedServices()])
  }

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


