import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Patient } from '../../../core/models/patient.model';

@Component({
  selector: 'app-header-private',
  imports: [RouterModule, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  patient: Patient | null = null;
  userRole: 'patient' | 'secretaire' | null = null;
  userName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
    this.patient = this.authService.getCurrentPatient();
    this.userName = this.authService.getCurrentUser() || 'Utilisateur';
  }

  isPatient(): boolean {
    return this.userRole === 'patient';
  }

  isSecretaire(): boolean {
    return this.userRole === 'secretaire';
  }

  onLogout(): void {
    this.authService.logout();
  }
}
