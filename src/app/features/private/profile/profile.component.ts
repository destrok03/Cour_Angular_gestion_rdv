import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Patient } from '../../../core/models/patient.model';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  patient: Patient | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.patient = this.authService.getCurrentPatient();
    if (!this.patient) {
      this.router.navigate(['/private/dash']);
    }
  }
}
