import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerte',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alert alert-{{ type }} d-flex align-items-center" role="alert">
      <i class="bi bi-{{ icon }} me-2"></i>
      <div>{{ message }}</div>
    </div>
  `
})
export class AlerteComponent {
  @Input({ required: true }) message!: string;
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'info';
  @Input() icon: string = 'info-circle';
}
