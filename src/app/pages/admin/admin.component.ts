import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule, MatButtonModule, MatIconModule],
  template: `
    <div class="container admin-container">
      <h1>Admin Dashboard</h1>
      
      <mat-tab-group>
        <mat-tab label="Manage News">
          <div class="tab-content">
            <button mat-raised-button color="primary" class="add-btn"><mat-icon>add</mat-icon> Add News</button>
            <table mat-table [dataSource]="newsData" class="mat-elevation-z2">
              <ng-container matColumnDef="title">
                <th mat-header-cell *matHeaderCellDef> Title </th>
                <td mat-cell *matCellDef="let element"> {{element.title}} </td>
              </ng-container>

              <ng-container matColumnDef="category">
                <th mat-header-cell *matHeaderCellDef> Category </th>
                <td mat-cell *matCellDef="let element"> {{element.category}} </td>
              </ng-container>

              <ng-container matColumnDef="views">
                <th mat-header-cell *matHeaderCellDef> Views </th>
                <td mat-cell *matCellDef="let element"> {{element.views}} </td>
              </ng-container>
              
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef> Actions </th>
                <td mat-cell *matCellDef="let element">
                  <button mat-icon-button color="primary"><mat-icon>edit</mat-icon></button>
                  <button mat-icon-button color="warn"><mat-icon>delete</mat-icon></button>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
          </div>
        </mat-tab>
        <mat-tab label="Categories">
          <div class="tab-content">
            <p>Category management interface goes here.</p>
          </div>
        </mat-tab>
        <mat-tab label="Users & Reporters">
          <div class="tab-content">
             <p>User and Reporter management interface goes here.</p>
          </div>
        </mat-tab>
        <mat-tab label="Analytics">
          <div class="tab-content">
             <p>Analytics dashboard showing page views, trends, etc.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .admin-container {
      margin-top: 2rem;
      min-height: 70vh;
    }
    h1 {
      color: var(--kovai-purple);
      margin-bottom: 2rem;
    }
    .tab-content {
      padding: 2rem 0;
    }
    .add-btn {
      margin-bottom: 1rem;
    }
    table {
      width: 100%;
    }
  `]
})
export class AdminComponent {
  displayedColumns: string[] = ['title', 'category', 'views', 'actions'];
  newsData = [
    { title: 'Metro expansion by 2026', category: 'Coimbatore', views: 1204 },
    { title: 'IT park announced in Saravanampatti', category: 'Technology', views: 890 },
    { title: 'Traffic diversions at Gandhipuram', category: 'Local', views: 567 },
  ];
}
