import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DemandeFilter, DemandeResponse } from '../../../../core/models/demande.model';
import { DemandeService } from '../../../../core/services/demande.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { StatusComponent } from '../../../../shared/components/status/status.component';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule, PaginationComponent, StatusComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {
  title: string = "Liste des demandes de rendez-vous";

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

  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  private loadDemandes(): void {
    this.response = this.demandeService.getDemandes(this.filter, this.response.currentPage);
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
