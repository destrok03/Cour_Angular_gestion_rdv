import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeFilter, DemandeResponse } from '../models/demande.model';
import { IDemandeService } from './interfaces/demande.interface';
import { DemandeMockService } from './demande-mock.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeService implements IDemandeService {
  private implementation: IDemandeService;

  constructor(private mockService: DemandeMockService) {
    this.implementation = mockService;
  }

  getDemandes(filter: DemandeFilter, page: number = 1): Observable<DemandeResponse> {
    return this.implementation.getDemandes(filter, page);
  }
}
