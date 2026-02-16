import { Component } from '@angular/core';
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
export class HeaderComponent {
  patient: Patient | null = null;

  constructor(private authService: AuthService) {
    this.patient = this.authService.getCurrentPatient();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
