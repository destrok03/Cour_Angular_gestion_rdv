import { DossierMedical } from '../core/models/dossier-medical.model';

export const MOCK_DOSSIER_MEDICAL: DossierMedical[] = [
  {
    patientId: 1,
    patientNom: 'Dupont Jean',
    antecedents: 'Hypertension, Diabète type 2',
    allergies: ['Pénicilline', 'Arachides'],
    groupeSanguin: 'A+',
    consultations: [
      {
        id: 1,
        diagnostic: 'Grippe saisonnière',
        traitement: 'Repos et hydratation',
        notes: 'Revoir dans 1 semaine si symptômes persistent',
        date: '2024-02-15'
      },
      {
        id: 2,
        diagnostic: 'Contrôle diabète',
        traitement: 'Ajustement traitement',
        notes: 'Glycémie stable',
        date: '2024-01-20'
      },
      {
        id: 3,
        diagnostic: 'Hypertension',
        traitement: 'Maintien traitement actuel',
        notes: 'Tension artérielle normale',
        date: '2023-12-10'
      }
    ]
  }
];
