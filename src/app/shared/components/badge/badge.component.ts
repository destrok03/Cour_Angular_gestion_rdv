import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="type">
      <span *ngSwitchCase="'success'" class="badge bg-success">{{ text }}</span>
      <span *ngSwitchCase="'danger'" class="badge bg-danger">{{ text }}</span>
      <span *ngSwitchCase="'warning'" class="badge bg-warning text-dark">{{ text }}</span>
      <span *ngSwitchCase="'info'" class="badge bg-info text-dark">{{ text }}</span>
      <span *ngSwitchDefault class="badge bg-secondary">{{ text }}</span>
    </ng-container>
  `
})
export class BadgeComponent {
  @Input({ required: true }) text!: string;
  @Input() type: 'success' | 'danger' | 'warning' | 'info' | 'secondary' = 'secondary';
}
