import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Statut } from '../../../core/models/demande.model';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if(statut === 'accepté') {
      <span class="badge bg-success text-white">
        <i class="bi bi-check-circle"></i> Accepté
      </span>
    } @else if(statut === 'refusé') {
      <span class="badge bg-danger text-white">
        <i class="bi bi-x-circle"></i> Refusé
      </span>
    } @else {
      <span class="badge bg-warning text-dark">
        <i class="bi bi-clock-history"></i> En attente
      </span>
    }
  `
})
export class StatusComponent {
  @Input() statut: Statut = 'en attente';
}
