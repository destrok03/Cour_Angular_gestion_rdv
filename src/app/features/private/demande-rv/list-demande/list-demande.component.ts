import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemandeFilter, DemandeResponse } from '../../../../core/models/demande.model';
import { DemandeService } from '../../../../core/services/demande.service';
import { AuthService } from '../../../../core/services/auth.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { StatusComponent } from '../../../../shared/components/status/status.component';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, PaginationComponent, StatusComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemandeComponent implements OnInit {
  title: string = "Liste des demandes de rendez-vous";
  loading: boolean = false;

  filter: DemandeFilter = {
    statut: '',
    specialite: '',
  };

  response: DemandeResponse = {
    data: [],
    totalPage: 0,
    currentPage: 1,
    totalItems: 0,
    pages: []
  };

  constructor(
    private demandeService: DemandeService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.authService.getUserRole() !== 'secretaire') {
      this.router.navigate(['/private/dash']);
      return;
    }
    this.loadDemandes();
  }

  private loadDemandes(): void {
    this.loading = true;
    this.cdr.markForCheck();
    
    this.demandeService.getDemandes(this.filter, this.response.currentPage)
      .subscribe({
        next: (response) => {
          this.response = response;
          this.loading = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Erreur:', error);
          this.loading = false;
          this.cdr.markForCheck();
        }
      });
  }

  onFilterChange(): void {
    this.response.currentPage = 1;
    this.loadDemandes();
  }

  onPageChange(page: number): void {
    this.response.currentPage = page;
    this.loadDemandes();
  }
}
