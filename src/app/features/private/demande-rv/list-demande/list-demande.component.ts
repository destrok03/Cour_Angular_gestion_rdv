import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListRvModel, StatusDemandeModel, SpecialiteModel} from '../../models/demande.model';


@Component({
  selector: 'app-list-demande',
  imports: [RouterLink],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
 title: string = "Liste des demandes de rendez-vous";
 demandes: DemandeListRvModel[] = [
   { id: 1, dateDemande: '2024-07-01', heure: '10:00', statut: StatusDemandeModel.EN_ATTENTE, specialite: SpecialiteModel.CARDIOLOGIE },
   { id: 2, dateDemande: '2024-07-05', heure: '14:00', statut: StatusDemandeModel.ACCEPTEE, specialite: SpecialiteModel.DERMATOLOGIE },
   { id: 3, dateDemande: '2024-07-10', heure: '09:00', statut: StatusDemandeModel.REFUSEE, specialite: SpecialiteModel.PEDIATRIE }
 ];

 
}
