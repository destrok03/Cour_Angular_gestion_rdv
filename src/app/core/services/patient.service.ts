import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = [];

  constructor() {}

  createPatient(patient: Patient): boolean {
    this.patients.push(patient);
    return true;
  }

  getPatients(): Patient[] {
    return [...this.patients];
  }

  getPatientByNumero(numero: string): Patient | undefined {
    return this.patients.find(p => p.numero === numero);
  }
}
