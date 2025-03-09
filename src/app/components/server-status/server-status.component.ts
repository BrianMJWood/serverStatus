import { Component, input, InputSignal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: InputSignal<string> = input.required<string>();
}
