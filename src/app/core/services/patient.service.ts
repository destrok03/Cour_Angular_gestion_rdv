import { Injectable } from '@angular/core';
import { Patient, PatientRequest } from '../models/patient.model';
import { MOCK_PATIENTS } from '../../mocks/patient.mock';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = MOCK_PATIENTS;

  constructor() {}

  createPatient(patientRequest: PatientRequest): Patient {
    const newPatient: Patient = {
      ...patientRequest,
      id: this.patients.length + 1
    };
    this.patients.push(newPatient);
    return newPatient;
  }

  getPatients(): Patient[] {
    return [...this.patients];
  }

  getPatientByNumero(numero: string): Patient | undefined {
    return this.patients.find(p => p.numero === numero);
  }
}
