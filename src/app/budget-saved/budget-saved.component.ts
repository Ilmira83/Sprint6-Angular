import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { savedBudgets } from '../interface/budget';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-saved',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budget-saved.component.html',
  styleUrl: './budget-saved.component.css'
})
export class BudgetSavedComponent {
  savedBudgets: savedBudgets[] = [];
  savedBdgtForm: FormGroup;

  savedServices = inject(BudgetService);
  dataSent = false;
  name = this.savedServices.name
  email = this.savedServices.email
  nPhone = this.savedServices.nPhone
  allSavedBudgets = this.savedServices.allSavedBudgets

  
  constructor(private fb: FormBuilder){
    this.savedBdgtForm = this.fb.group({
      name: new FormControl('', [/* Validators.required */]),
      phone: new FormControl('', [/* Validators.required,  */Validators.min(5)]),
      email: new FormControl('', [/* Validators.required, */ Validators.email]),
    })
    effect(() => { 
      this.allSavedBudgets()
    });
  }
  
  
  getInputData(){
    this.savedServices.name.set(this.savedBdgtForm.value.name);
    this.savedServices.email.set(this.savedBdgtForm.value.email);
    this.savedServices.nPhone.set(this.savedBdgtForm.value.phone);
  }

  sendData(){
    this.savedBudgets = this.savedServices.getSavedServices()
    this.getInputData()
    this.dataSent = true;
    this.savedServices.getTotalSavedServices()
    
  }

}


