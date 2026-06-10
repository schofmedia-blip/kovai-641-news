import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styles: [`
    .header-toolbar {
      display: flex;
      justify-content: space-between;
      border-bottom: 4px solid var(--kovai-purple);
      background-color: var(--mat-sys-surface);
      height: auto;
      padding: 10px 16px;
    }
    .logo {
      font-weight: 900;
      font-size: 1.5rem;
      text-decoration: none;
      color: var(--mat-sys-on-surface);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .logo-img {
      height: 120px;
      width: auto;
      object-fit: contain;
      mix-blend-mode: multiply;
      filter: contrast(1.2) brightness(1.05);
    }
    :host-context(body.dark-theme) .logo-img {
      filter: none;
      mix-blend-mode: normal;
    }
    .nav-links {
      display: none;
    }
    @media (min-width: 768px) {
      .nav-links {
        display: flex;
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isDark = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDark = this.themeService.isDarkTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDark = this.themeService.isDarkTheme();
  }
}
