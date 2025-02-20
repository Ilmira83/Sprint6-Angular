import { Component, inject, OnInit } from '@angular/core';
import { BudgetListComponent } from '../../budget-list/budget-list.component';
import { Budget } from '../../interface/budget';
import { BudgetService } from '../../services/budget.service';


@Component({
  selector: 'app-home',
  imports: [BudgetListComponent],
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
