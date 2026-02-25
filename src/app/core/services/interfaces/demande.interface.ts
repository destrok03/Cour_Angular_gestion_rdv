import { Observable } from 'rxjs';
import { DemandeFilter, DemandeResponse } from '../../models/demande.model';

export interface IDemandeService {
  getDemandes(filter: DemandeFilter, page: number): Observable<DemandeResponse>;
}
