import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ad-banner-container" [style.height]="height">
      <div class="ad-label">Advertisement</div>
      <div class="ad-content">
        <ng-container *ngIf="imageUrl; else placeholder">
          <img [src]="imageUrl" [alt]="altText" />
        </ng-container>
        <ng-template #placeholder>
          <div class="placeholder-ad">
            Your Ad Here
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [`
    .ad-banner-container {
      width: 100%;
      background-color: var(--mat-sys-surface-variant);
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      position: relative;
      overflow: hidden;
    }
    .ad-label {
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(0,0,0,0.5);
      color: white;
      font-size: 0.7rem;
      padding: 2px 5px;
      z-index: 10;
    }
    .ad-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ad-content img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    .placeholder-ad {
      color: var(--mat-sys-on-surface-variant);
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: 0.5;
    }
  `]
})
export class AdBannerComponent {
  @Input() imageUrl?: string;
  @Input() altText: string = 'Advertisement';
  @Input() height: string = '100px';
}
