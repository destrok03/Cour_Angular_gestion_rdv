import { Demande } from '../features/private/demande-rv/models/demande.model';

export const MOCK_DEMANDES: Demande[] = [
  { id: 1, dateDemande: '2024-07-01', heure: '10:00', statut: 'en attente', specialite: 'cardiologie' },
  { id: 2, dateDemande: '2024-07-05', heure: '14:00', statut: 'accepté', specialite: 'dermatologie' },
  { id: 3, dateDemande: '2024-07-10', heure: '09:00', statut: 'refusé', specialite: 'pediatrie' },
  { id: 4, dateDemande: '2024-07-12', heure: '11:30', statut: 'en attente', specialite: 'neurologie' },
  { id: 5, dateDemande: '2024-07-15', heure: '15:00', statut: 'accepté', specialite: 'ophtalmologie' },
  { id: 6, dateDemande: '2024-07-18', heure: '08:30', statut: 'en attente', specialite: 'cardiologie' },
  { id: 7, dateDemande: '2024-07-20', heure: '16:00', statut: 'refusé', specialite: 'dermatologie' },
  { id: 8, dateDemande: '2024-07-22', heure: '10:30', statut: 'accepté', specialite: 'pediatrie' },
  { id: 9, dateDemande: '2024-07-25', heure: '13:00', statut: 'en attente', specialite: 'neurologie' },
  { id: 10, dateDemande: '2024-07-28', heure: '09:30', statut: 'accepté', specialite: 'ophtalmologie' },
  { id: 11, dateDemande: '2024-07-30', heure: '14:30', statut: 'refusé', specialite: 'cardiologie' },
  { id: 12, dateDemande: '2024-08-02', heure: '11:00', statut: 'en attente', specialite: 'dermatologie' }
];
