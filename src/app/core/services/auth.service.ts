import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { MOCK_USERS } from '../../mocks/users.mock';
import { User, AuthResponse } from '../models/user.model';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';
  private readonly PATIENT_KEY = 'current_patient';
  private patientSubject = new BehaviorSubject<Patient | null>(this.loadPatientFromStorage());
  public patient$ = this.patientSubject.asObservable();
  private currentUser: User | null = null;

  constructor(private router: Router) {}

  private loadPatientFromStorage(): Patient | null {
    const data = localStorage.getItem(this.PATIENT_KEY);
    return data ? JSON.parse(data) : null;
  }

  login(email: string, password: string): AuthResponse {
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (user) {
      this.currentUser = user;
      const token = btoa(`${email}:${Date.now()}`);
      localStorage.setItem(this.TOKEN_KEY, token);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      return { success: true, token, user: { email } };
    }
    
    return { success: false };
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.PATIENT_KEY);
    this.patientSubject.next(null);
    this.router.navigate(['/public/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): string | null {
    if (!this.currentUser) {
      const data = localStorage.getItem(this.USER_KEY);
      this.currentUser = data ? JSON.parse(data) : null;
    }
    return this.currentUser?.email || null;
  }

  getUserRole(): 'patient' | 'secretaire' | null {
    if (!this.currentUser) {
      const data = localStorage.getItem(this.USER_KEY);
      this.currentUser = data ? JSON.parse(data) : null;
    }
    return this.currentUser?.role || null;
  }

  getPatientId(): number | null {
    if (!this.currentUser) {
      const data = localStorage.getItem(this.USER_KEY);
      this.currentUser = data ? JSON.parse(data) : null;
    }
    return this.currentUser?.patientId || null;
  }

  setCurrentPatient(patient: Patient): void {
    localStorage.setItem(this.PATIENT_KEY, JSON.stringify(patient));
    this.patientSubject.next(patient);
  }

  getCurrentPatient(): Patient | null {
    const data = localStorage.getItem(this.PATIENT_KEY);
    return data ? JSON.parse(data) : null;
  }
}
