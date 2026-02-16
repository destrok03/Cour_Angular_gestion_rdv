import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../../core/services/patient.service';
import { AuthService } from '../../../core/services/auth.service';
import { Patient } from '../../../core/models/patient.model';

@Component({
  selector: 'app-patient',
  imports: [FormsModule, CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patient: Patient = {
    numero: '',
    nom: '',
    prenom: '',
    email: '',
    tel: '',
    adresse: '',
    antecedents: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private patientService: PatientService, private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    const success = this.patientService.createPatient(this.patient);
    
    if (success) {
      this.authService.setCurrentPatient(this.patient);
      this.successMessage = 'Patient créé avec succès!';
      setTimeout(() => {
        this.router.navigate(['/public/login']);
      }, 2000);
    } else {
      this.errorMessage = 'Erreur lors de la création du patient';
    }
  }

  private validateForm(): boolean {
    if (!this.patient.numero || !this.patient.nom || !this.patient.prenom || 
        !this.patient.email || !this.patient.tel || !this.patient.adresse) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires';
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.patient.email)) {
      this.errorMessage = 'Format d\'email invalide';
      return false;
    }

    const telRegex = /^\+?[0-9]{9,15}$/;
    if (!telRegex.test(this.patient.tel.replace(/\s/g, ''))) {
      this.errorMessage = 'Format de téléphone invalide';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  onCancel(): void {
    this.router.navigate(['/public/login']);
  }
}
