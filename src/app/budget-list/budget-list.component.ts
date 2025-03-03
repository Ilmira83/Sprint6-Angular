import { Component, computed, effect, inject, Input, signal, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Budget } from '../interface/budget';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { PanelComponent } from "../panel/panel.component";
import { BudgetSavedComponent } from "../budget-saved/budget-saved.component";
import { BudgetService } from '../services/budget.service';


@Component({
  selector: 'app-budget-list',
  imports: [CommonModule, ReactiveFormsModule, PanelComponent, BudgetSavedComponent],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})


export class BudgetListComponent {

  private budgetService = inject(BudgetService);
  pages = this.budgetService.pages
  langs = this.budgetService.langs
  finalBudget = this.budgetService.finalBudget

  @Input() services: Budget[] = [];
  
  budgetForm: FormGroup;
  selectedPrices: any | null []= [];
  budgetPrice = signal<number>(0);
  counter = -1;
  openPanel = signal(false);
  panelPrice = signal<number>(0);

  constructor (private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
    selectedPrices: this.fb.array([]),
    });
    effect(() => { 
      this.getLastPanelPrice();
      this.calcTotalPrice();
    });
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

  calcTotalPrice =() => this.budgetPrice.set(this.selectedPrices.value.reduce((sum: number, item: number) => sum + item, 0)) 
    
  clacFinalBudget = computed(() => {
   const panelPrice = isNaN(this.panelPrice()) ? 0 : this.panelPrice();
   const budgetPrice = isNaN(this.budgetPrice()) ? 0 : this.budgetPrice();
    return panelPrice + budgetPrice}) 

  getLastPanelPrice =() => this.panelPrice.set(this.finalBudget().at(-1)!)

  resetValues=()=> this.budgetService.resetValues()

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
    this.isOpen(index)
  }
 

}

  
  


  
  
 

