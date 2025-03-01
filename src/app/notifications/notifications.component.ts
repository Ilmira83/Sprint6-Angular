import { Component, inject, output, signal } from '@angular/core';
import { InforalertService } from '../services/inforalert.service';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
   infoMess = inject(InforalertService);

}
