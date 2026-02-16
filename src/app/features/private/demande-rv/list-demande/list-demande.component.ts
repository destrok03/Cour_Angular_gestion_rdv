import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DemandeFilter, DemandeResponse } from '../../../../core/models/demande.model';
import { DemandeService } from '../../../../core/services/demande.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { StatusComponent } from '../../../../shared/components/status/status.component';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, PaginationComponent, StatusComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit, OnDestroy {
  title: string = "Liste des demandes de rendez-vous";
  loading: boolean = false;
  private subscription?: Subscription;

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
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private loadDemandes(): void {
    this.loading = true;
    this.cdr.detectChanges();
    
    this.subscription = this.demandeService.getDemandes(this.filter, this.response.currentPage)
      .subscribe({
        next: (response) => {
          this.response = response;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Erreur lors du chargement des demandes:', error);
          this.loading = false;
          this.cdr.detectChanges();
        },
        complete: () => {
          console.log('Chargement des demandes terminé');
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
