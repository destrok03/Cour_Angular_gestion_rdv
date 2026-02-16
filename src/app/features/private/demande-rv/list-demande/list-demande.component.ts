import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Demande, Specialite, Statut } from '../models/demande.model';
import { DemandeFilter } from '../models/demande-filter.model';
import { DemandeResponse } from '../models/demande-response.model';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule],
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
