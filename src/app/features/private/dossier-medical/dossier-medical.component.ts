import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IDossierMedicalService, DOSSIER_MEDICAL_SERVICE_TOKEN } from '../../../core/services/interfaces/dossier-medical.interface';
import { DossierMedical } from '../../../core/models/dossier-medical.model';
import { AuthService } from '../../../core/services/auth.service';
import { AlerteComponent } from '../../../shared/components/alerte/alerte.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-dossier-medical',
  standalone: true,
  imports: [CommonModule, AlerteComponent, PaginationComponent],
  templateUrl: './dossier-medical.component.html',
  styleUrl: './dossier-medical.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DossierMedicalComponent implements OnInit {
  dossier$!: Observable<DossierMedical | undefined>;
  currentPage = 1;
  itemsPerPage = 5;

  constructor(
    @Inject(DOSSIER_MEDICAL_SERVICE_TOKEN) private dossierService: IDossierMedicalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const patientId = this.authService.getPatientId();
    if (!patientId) {
      this.router.navigate(['/private/dash']);
      return;
    }
    this.dossier$ = this.dossierService.getDossierByPatient(patientId);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getPaginatedConsultations(consultations: any[]): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return consultations.slice(start, start + this.itemsPerPage);
  }

  getTotalPages(total: number): number {
    return Math.ceil(total / this.itemsPerPage);
  }
}
