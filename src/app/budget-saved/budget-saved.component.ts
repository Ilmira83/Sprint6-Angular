import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { savedBudgets } from '../interface/budget';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-budget-saved',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budget-saved.component.html',
  styleUrl: './budget-saved.component.css'
})
export class BudgetSavedComponent {
  savedBudgets: savedBudgets[] = [];
  savedBdgtForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.savedBdgtForm = this.fb.group({
      name: new FormControl('', [/* Validators.required */]),
      phone: new FormControl('', [/* Validators.required,  */Validators.min(5)]),
      email: new FormControl('', [/* Validators.required, */ Validators.email]),
    })
      
  }
  saveBudget(){
    
          
        }

}


