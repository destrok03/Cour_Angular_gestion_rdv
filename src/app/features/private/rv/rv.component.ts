import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IRendezVousService, RENDEZ_VOUS_SERVICE_TOKEN } from '../../../core/services/interfaces/rendez-vous.interface';
import { RendezVous, StatutRv } from '../../../core/models/rendez-vous.model';
import { AuthService } from '../../../core/services/auth.service';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { AlerteComponent } from '../../../shared/components/alerte/alerte.component';

@Component({
  selector: 'app-rv',
  standalone: true,
  imports: [CommonModule, BadgeComponent, AlerteComponent],
  templateUrl: './rv.component.html',
  styleUrl: './rv.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RvComponent implements OnInit {
  rendezVous$!: Observable<RendezVous[]>;
  filteredRv$!: Observable<RendezVous[]>;
  selectedStatut: StatutRv | 'tous' = 'tous';

  constructor(
    @Inject(RENDEZ_VOUS_SERVICE_TOKEN) private rvService: IRendezVousService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const patientId = this.authService.getPatientId();
    if (!patientId) {
      this.router.navigate(['/private/dash']);
      return;
    }
    this.rendezVous$ = this.rvService.getRendezVousByPatient(patientId);
    this.filteredRv$ = this.rendezVous$;
  }

  onFilterChange(statut: StatutRv | 'tous'): void {
    this.selectedStatut = statut;
    this.filteredRv$ = this.rendezVous$.pipe(
      map(rvList => this.rvService.filterByStatut(rvList, statut))
    );
  }

  getStatutBadgeType(statut: StatutRv): 'success' | 'danger' | 'warning' | 'info' {
    const map: Record<StatutRv, 'success' | 'danger' | 'warning' | 'info'> = {
      confirme: 'success',
      termine: 'info',
      annule: 'danger',
      en_attente: 'warning'
    };
    return map[statut];
  }

  getStatutLabel(statut: StatutRv): string {
    const map: Record<StatutRv, string> = {
      confirme: 'Confirmé',
      termine: 'Terminé',
      annule: 'Annulé',
      en_attente: 'En attente'
    };
    return map[statut];
  }

  voirDetails(id: number): void {
    this.router.navigate(['/private/rv', id]);
  }
}
