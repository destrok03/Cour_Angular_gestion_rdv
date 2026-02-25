import { User } from '../core/models/user.model';

export const MOCK_USERS: User[] = [
  { email: 'patient@gmail.com', password: 'patient123', role: 'patient', patientId: 1 },
  { email: 'secretaire@gmail.com', password: 'secret123', role: 'secretaire' }
];
