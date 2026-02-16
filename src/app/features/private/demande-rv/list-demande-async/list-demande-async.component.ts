import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';
import { DemandeFilter, DemandeResponse } from '../../../../core/models/demande.model';
import { DemandeService } from '../../../../core/services/demande.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { StatusComponent } from '../../../../shared/components/status/status.component';

@Component({
  selector: 'app-list-demande-async',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, PaginationComponent, StatusComponent],
  templateUrl: './list-demande-async.component.html',
  styleUrl: './list-demande-async.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemandeAsyncComponent implements OnInit {
  title: string = "Liste des demandes de rendez-vous (AsyncPipe)";
  
  response$!: Observable<DemandeResponse>;
  private filterSubject = new BehaviorSubject<{ filter: DemandeFilter, page: number }>({
    filter: { statut: '', specialite: '' },
    page: 1
  });

  filter: DemandeFilter = {
    statut: '',
    specialite: '',
  };

  currentPage: number = 1;

  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.response$ = this.filterSubject.pipe(
      switchMap(({ filter, page }) => this.demandeService.getDemandes(filter, page))
    );
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.filterSubject.next({ filter: this.filter, page: this.currentPage });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.filterSubject.next({ filter: this.filter, page: this.currentPage });
  }
}
