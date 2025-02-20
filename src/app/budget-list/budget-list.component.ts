import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Budget } from '../interface/budget';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-budget-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})


export class BudgetListComponent {
  @Input() services: Budget[] = [];
  budgetForm: FormGroup;
  selectedPrices: any | null []= [];
  totalPrice = 0;


  constructor (private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
    selectedPrices: this.fb.array([]),
    })
  }

  getPrices(e: any) {
    this.selectedPrices = this.budgetForm.get('selectedPrices') as FormArray;
    if(e.target.checked) {
      this.selectedPrices.push(new FormControl(Number(e.target.value)))
    } else {
      let i = 0;
      this.selectedPrices.controls.forEach((p: any)  => {
        if(p.value == e.target.value) {
          this.selectedPrices.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  calcTotal() {
    this.totalPrice = this.selectedPrices.value.reduce((sum: number, item: number) => sum + item, 0)
  }




  onChange(e: any) {
    this.getPrices(e);
    this.calcTotal()
  }

}

  
  


  
  
 

