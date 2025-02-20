import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-panel',
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})

export class PanelComponent {
  pages:number = 0;
  languages:number = 0;

  increasePages = () => this.pages+=1
  
  decreasePages = () => { if(this.pages > 0){
      this.pages-=1
    }
  }

  increaseLangs= () => this.languages+=1

  decreaseLangs= () => { if(this.languages > 0) {
      this.languages-=1
    }
  }






}

  
  


  
  
 

