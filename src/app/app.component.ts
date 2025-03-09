import { Component, OnInit, DestroyRef, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ServerStatusComponent } from './components/server-status/server-status.component';
import { ServerTrafficComponent } from './components/server-traffic/server-traffic.component';
import { SupportTicketsComponent } from './components/support-tickets/support-tickets.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { dummyTrafficData } from './dummy-data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    ServerTrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent implements OnInit {
  public _dummyTrafficData = dummyTrafficData;
  private statusOptions = signal<string[]>(['offline', 'online', 'unknown']);
  private destroyRef = inject(DestroyRef);

  maxTraffic: number = Math.max(
    ...this._dummyTrafficData.map((data) => data.value)
  );
  currentStatus = signal<string>('offline');

  ngOnInit(): void {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(
        Math.random() * this.statusOptions().length
      );
      this.currentStatus.set(this.statusOptions()[randomIndex]);
    }, 2000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
