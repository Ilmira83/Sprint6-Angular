import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
