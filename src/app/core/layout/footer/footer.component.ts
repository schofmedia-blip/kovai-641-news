import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="brand">
            <img src="/assets/logo.png" alt="Kovai 641 News Logo" class="footer-logo">
            <p>Coimbatore's Voice, Tamil Nadu's Pulse</p>
          </div>
          <div class="links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          &copy; {{ currentYear }} Kovai 641 News. All rights reserved.
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--mat-sys-surface-variant);
      color: var(--mat-sys-on-surface-variant);
      padding: 2rem 0 1rem;
      margin-top: 3rem;
      border-top: 1px solid var(--border-color);
    }
    .footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .brand .footer-logo {
      height: 200px;
      margin-bottom: 0.5rem;
      mix-blend-mode: multiply;
      filter: contrast(1.2) brightness(1.05);
    }
    :host-context(body.dark-theme) .brand .footer-logo {
      filter: none;
      mix-blend-mode: normal;
    }
    .links ul {
      list-style: none;
      padding: 0;
    }
    .links a {
      color: var(--mat-sys-on-surface-variant);
      text-decoration: none;
    }
    .copyright {
      text-align: center;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
      font-size: 0.875rem;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
