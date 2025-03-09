import {
  Component,
  ElementRef,
  viewChild,
  output,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from '../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket-form.component.html',
  styleUrl: './new-ticket-form.component.css',
})
export class NewTicketFormComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = signal<string>('');
  enteredRequest = signal<string>('');
  addTicket = output<{ title: string; request: string }>();

  onSubmit(title: string, request: string): void {
    this.addTicket.emit({ title, request });
    this.form().nativeElement.reset();
  }
}
