import { Component, input, signal } from '@angular/core';
import { NewTicketFormComponent } from './new-ticket/new-ticket-form.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketFormComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {
  tickets = signal<Ticket[]>([]);

  public ticket: Ticket = {
    title: 'My printer is on fire!',
    request: 'Please help me!',
    status: 'open',
    id: 0,
  };
  addTicket({ title, request }: { title: string; request: string }): void {
    this.tickets().push({
      title,
      request,
      status: 'open',
      id: Math.random(),
    });
  }

  onClose(ticketNumber: number): void {
    this.tickets.set(this.tickets().filter((t) => t.id !== ticketNumber));
  }

  onComplete(ticketNumber: number): void {
    this.tickets.set(
      this.tickets().map((t) => {
        if (t.id === ticketNumber) {
          t.status = 'closed';
        }
        return t;
      })
    );
  }
}
