import { RendezVous } from '../core/models/rendez-vous.model';

export const MOCK_RENDEZ_VOUS: RendezVous[] = [
  {
    id: 1,
    patientId: 1,
    patientNom: 'Dupont Jean',
    date: '2024-02-15',
    heure: '10:00',
    motif: 'Consultation générale',
    statut: 'termine',
    consultation: {
      id: 1,
      diagnostic: 'Grippe saisonnière',
      traitement: 'Repos et hydratation',
      notes: 'Revoir dans 1 semaine si symptômes persistent',
      date: '2024-02-15'
    },
    ordonnance: {
      id: 1,
      consultationId: 1,
      medicaments: ['Paracétamol 1g', 'Vitamine C'],
      posologie: '3 fois par jour',
      duree: '7 jours'
    }
  },
  {
    id: 2,
    patientId: 1,
    patientNom: 'Dupont Jean',
    date: '2024-03-20',
    heure: '14:30',
    motif: 'Contrôle annuel',
    statut: 'confirme'
  },
  {
    id: 3,
    patientId: 1,
    patientNom: 'Dupont Jean',
    date: '2024-01-10',
    heure: '09:00',
    motif: 'Vaccination',
    statut: 'annule'
  }
];
