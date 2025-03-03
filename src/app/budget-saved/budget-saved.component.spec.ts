import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSavedComponent } from './budget-saved.component';

describe('BudgetSavedComponent', () => {
  let component: BudgetSavedComponent;
  let fixture: ComponentFixture<BudgetSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSavedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
