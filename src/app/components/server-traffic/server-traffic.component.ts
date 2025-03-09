import { Component, input } from '@angular/core';

@Component({
  selector: 'app-server-traffic',
  standalone: true,
  templateUrl: './server-traffic.component.html',
  styleUrl: './server-traffic.component.css',
})
export class ServerTrafficComponent {
  dummyTrafficData = input.required<any[]>();
  maxTraffic = input.required<number>();
}
