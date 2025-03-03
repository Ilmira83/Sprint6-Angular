import { Component, effect, HostListener, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InforalertService } from '../services/inforalert.service';
import { BudgetService } from '../services/budget.service';
import { NotificationsComponent } from "../notifications/notifications.component";


@Component({
  selector: 'app-panel',
  imports: [CommonModule, NotificationsComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})


export class PanelComponent {
  infoMess = inject(InforalertService);

  private budgetService = inject(BudgetService);
  pages = this.budgetService.pages
  langs = this.budgetService.langs
  panelPrice = this.budgetService.panelPrice;
  finalBudget = this.budgetService.finalBudget;
 /*  passPaneldata = output<number>(); */
  toggled:boolean = false;

  constructor(){
    effect(() => { this.calcPrice(); 
   /*    this.passDataToParent(); */
    });
  }

  increasePages = () => this.pages.update(v => v+1);
      
  decreasePages = () => { 
    if(this.pages() > 0) { this.pages.update(v=> v-1)}
  }

  increaseLangs = () => this.langs.update(v => v+1);
      
  decreaseLangs = () => { 
    if(this.langs() > 0) { this.langs.update(v=> v-1)} 
  }

  calcPrice=() =>{
     this.budgetService.calcPanelPrice()

   
     this.saveToArray()

    
  
  } 

  saveToArray=() => this.budgetService.saveToArray();
     
  resetValues=()=> this.budgetService.resetValues()
  
  
  
 
  
  /* passDataToParent=()=>this.passPaneldata.emit(this.panelPrice()) */

  isToggled(){
    this.toggled = !this.toggled
  }
 showInfoPages(event: MouseEvent){
  event.stopPropagation();
    this.infoMess.showInfo('Choose how many pages you want for your APP. Each page costs 30$.')
    this.isToggled()
  }
  showInfoLangs(event: MouseEvent){
    event.stopPropagation();
      this.infoMess.showInfo('Choose languages for your APP. Each language costs 30$.')
      this.isToggled()
  }
 
  @HostListener('window:click', ['$event'])
  closeInfo(event: MouseEvent) {
    
    if (!(event.target as HTMLElement).closest('.info-box')) {
      this.toggled = false;
  }}
   
}

  
  


  
  
 

