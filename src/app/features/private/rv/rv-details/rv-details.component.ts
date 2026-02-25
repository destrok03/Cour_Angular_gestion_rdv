import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IRendezVousService, RENDEZ_VOUS_SERVICE_TOKEN } from '../../../../core/services/interfaces/rendez-vous.interface';
import { RendezVous } from '../../../../core/models/rendez-vous.model';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { AlerteComponent } from '../../../../shared/components/alerte/alerte.component';

@Component({
  selector: 'app-rv-details',
  standalone: true,
  imports: [CommonModule, BadgeComponent, AlerteComponent],
  templateUrl: './rv-details.component.html',
  styleUrl: './rv-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RvDetailsComponent implements OnInit {
  rv$!: Observable<RendezVous | undefined>;

  constructor(
    @Inject(RENDEZ_VOUS_SERVICE_TOKEN) private rvService: IRendezVousService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rv$ = this.route.params.pipe(
      switchMap(params => this.rvService.getRendezVousById(+params['id']))
    );
  }

  retour(): void {
    this.router.navigate(['/private/rv']);
  }
}
