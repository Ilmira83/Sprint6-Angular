import { Component, inject, OnInit } from '@angular/core';
import { BudgetListComponent } from '../../budget-list/budget-list.component';
import { Budget } from '../../interface/budget';
import { BudgetService } from '../../services/budget.service';
import { BudgetSavedComponent } from "../../budget-saved/budget-saved.component";


@Component({
  selector: 'app-home',
  imports: [BudgetListComponent, BudgetSavedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  services: Budget[] = []
  
  private variants = inject(BudgetService)

  ngOnInit(): void {
    this.services = this.variants.getServices();
  }
}
