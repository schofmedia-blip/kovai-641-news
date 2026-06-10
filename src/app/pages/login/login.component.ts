import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FormsModule],
  template: `
    <div class="container login-container">
      <mat-card class="login-card">
        <mat-card-header>
          <mat-card-title>Login to Kovai 641 News</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form (ngSubmit)="loginWithEmail()">
            <mat-form-field appearance="fill" class="full-width">
              <mat-label>Email address</mat-label>
              <input matInput type="email" [(ngModel)]="email" name="email" required>
            </mat-form-field>
            <button mat-raised-button color="primary" type="submit" class="full-width" [disabled]="loading">
              {{ loading ? 'Sending magic link...' : 'Send Magic Link' }}
            </button>
          </form>
          
          <div class="divider"><span>OR</span></div>
          
          <button mat-stroked-button type="button" class="full-width google-btn" (click)="loginWithGoogle()">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo">
            Continue with Google
          </button>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 60vh;
    }
    .login-card {
      width: 100%;
      max-width: 400px;
      padding: 2rem;
    }
    .full-width {
      width: 100%;
      margin-bottom: 1rem;
    }
    .divider {
      text-align: center;
      margin: 1.5rem 0;
      position: relative;
    }
    .divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background: var(--border-color);
      z-index: 1;
    }
    .divider span {
      background: var(--mat-sys-surface);
      padding: 0 10px;
      position: relative;
      z-index: 2;
      color: var(--mat-sys-on-surface-variant);
    }
    .google-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    .google-btn img {
      width: 18px;
    }
  `]
})
export class LoginComponent {
  email: string = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  async loginWithEmail() {
    try {
      this.loading = true;
      const { error } = await this.authService.signInWithEmail(this.email);
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      this.loading = false;
    }
  }

  async loginWithGoogle() {
    try {
      const { error } = await this.authService.signInWithGoogle();
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  }
}
