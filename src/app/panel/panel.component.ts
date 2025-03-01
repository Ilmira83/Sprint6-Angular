import { Component, HostListener, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InforalertService } from '../services/inforalert.service';
import { Panel } from '../interface/budget';
import { BudgetService } from '../services/budget.service';
import { NotificationsComponent } from "../notifications/notifications.component";


@Component({
  selector: 'app-panel',
  imports: [CommonModule, NotificationsComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})


export class PanelComponent {

  panelArray: Panel[] = [];
  private panelData = inject(BudgetService);
  infoMess = inject(InforalertService);

  panelPrice = signal<number>(0);
  panelPriceArray: any | null []= [];
  totPanelPrice: number = 0;
  passPaneldata = output<number>();
  toggled:boolean = false;

  constructor(){
    this.panelArray = this.panelData.getPanelData();
  }
  
  increase = (index:number) =>{ this.panelArray[index].quantity += 1;
    this.onChange()
  }
    
  decrease = (index:number) => { 
    if(this.panelArray[index].quantity > 0) {
     this.panelArray[index].quantity-=1
    }; 
    this.onChange();
  }

  calcPrice=() => this.panelPrice.set(this.panelArray.reduce((acc, item) => acc * item.quantity, 1) * this.panelArray[0].price);

  passDataToParent=()=>this.passPaneldata.emit(this.panelPrice())


  isToggled(){
    this.toggled = !this.toggled
  }
 showInfo(event: MouseEvent, index:number){
  event.stopPropagation();
    if(index==0){
      this.infoMess.showInfo('Choose how many pages you want for your APP. Each page costs 30$.')
    } else {
      this.infoMess.showInfo('Choose languages for your APP. Each language costs 30$.')
    }
    this.isToggled()
  }

  @HostListener('window:click', ['$event'])
  closeInfo(event: MouseEvent) {
    
    if (!(event.target as HTMLElement).closest('.info-box')) {
      this.toggled = false;
  }}
   
  onChange(){
    this.calcPrice();
    this.passDataToParent()
  }
  

}

  
  


  
  
 

