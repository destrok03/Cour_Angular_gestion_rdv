import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Patient } from '../../../core/models/patient.model';
import { AlerteComponent } from '../../../shared/components/alerte/alerte.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, AlerteComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  patient$!: Observable<Patient | null>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.patient$ = this.authService.patient$;
  }
}
