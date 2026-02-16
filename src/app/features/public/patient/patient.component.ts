import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../../core/services/patient.service';
import { AuthService } from '../../../core/services/auth.service';
import { PatientRequest } from '../../../core/models/patient.model';

@Component({
  selector: 'app-patient',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patientForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private authService: AuthService,
    private router: Router
  ) {
    this.patientForm = this.fb.group({
      numero: ['', [Validators.required]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{9,15}$/)]],
      adresse: ['', [Validators.required]],
      antecedents: ['']
    });
  }

  get f() {
    return this.patientForm.controls;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.patientForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  onSubmit(): void {
    if (this.patientForm.invalid) {
      this.errorMessage = 'Veuillez corriger les erreurs du formulaire';
      return;
    }

    const patientRequest: PatientRequest = this.patientForm.value;
    const newPatient = this.patientService.createPatient(patientRequest);
    this.authService.setCurrentPatient(newPatient);
    
    this.successMessage = 'Patient créé avec succès!';
    setTimeout(() => {
      this.router.navigate(['/public/login']);
    }, 2000);
  }

  onReset(): void {
    this.patientForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

  onCancel(): void {
    this.router.navigate(['/public/login']);
  }
}
