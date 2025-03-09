import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticketData = input.required<Ticket>();
  onComplete = output<number>();
  ticketExpanded = signal<boolean>(false);

  completeTicket(ticketId: number): void {
    this.onComplete.emit(ticketId);
  }

  toggleTicketView(): void {
    this.ticketExpanded.set(!this.ticketExpanded());
  }
}
