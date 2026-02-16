export interface User {
  email: string;
  password: string;
}

export type LoginRequest = Pick<User, 'email' | 'password'>;

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: { email: string };
}
