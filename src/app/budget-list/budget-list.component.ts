import { Component, computed, Input, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Budget } from '../interface/budget';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { PanelComponent } from "../panel/panel.component";


@Component({
  selector: 'app-budget-list',
  imports: [CommonModule, ReactiveFormsModule, PanelComponent],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})


export class BudgetListComponent {
  @Input() services: Budget[] = [];
  budgetForm: FormGroup;
  selectedPrices: any | null []= [];
  totalPrice = signal<number>(0);
  counter = -1;
  openPanel = signal(false);
  panelBudget = signal<number>(0); //output from panel component
  panelBudgetArray: number[]= [];

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

  calcTotalPrice =() => this.totalPrice.set(this.selectedPrices.value.reduce((sum: number, item: number) => sum + item, 0)) 

  passDataFromChild(panelData:number) {
    this.panelBudgetArray.push(this.panelBudget());
    this.panelBudget.set(panelData)
  } 

  finalBudget = computed(() => this.panelBudget() + this.totalPrice()) 
 
  isOpen(index: number) {
    if(this.counter === index) {         
      this.openPanel.set(!this.openPanel());
      return
    } else {
      this.openPanel.set(true);
      this.counter = index;
    }
  } 
  

  onChange(e: any, index:number) {
    this.getPrices(e);
    this.calcTotalPrice();
    this.isOpen(index)
    console.log(this.panelBudgetArray)
  }

}

  
  


  
  
 

