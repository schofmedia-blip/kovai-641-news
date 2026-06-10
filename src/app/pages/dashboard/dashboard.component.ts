import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div class="container dashboard-container">
      <h1>User Dashboard</h1>
      <mat-card *ngIf="user">
        <mat-card-header>
          <mat-card-title>Welcome, {{ user.email }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>You can manage your saved articles, profile details, and preferences here.</p>
          <h3>Saved Articles</h3>
          <ul>
            <li>No articles saved yet.</li>
          </ul>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="warn" (click)="logout()">Logout</button>
        </mat-card-actions>
      </mat-card>
      <mat-card *ngIf="!user">
        <mat-card-content>
          <p>Please log in to view your dashboard.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-container {
      margin-top: 2rem;
      min-height: 50vh;
    }
    h1 {
      color: var(--kovai-purple);
      margin-bottom: 2rem;
    }
  `]
})
export class DashboardComponent implements OnInit {
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.user = await this.authService.user;
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  async logout() {
    await this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
