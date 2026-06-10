import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container page-content">
      <h1 class="page-title gsap-reveal">Coimbatore Local News Map</h1>
      <p class="gsap-reveal">Click on an area to view local news.</p>
      
      <div class="map-container gsap-reveal">
        <!-- Interactive SVG Placeholder for Coimbatore Map -->
        <svg viewBox="0 0 800 600" class="interactive-map">
          <!-- Dummy paths representing areas -->
          <g class="map-area" (click)="selectArea('Gandhipuram')">
            <path d="M 300 200 L 400 250 L 350 350 L 250 300 Z" fill="var(--kovai-purple)" opacity="0.7"/>
            <text x="310" y="280" fill="white" font-weight="bold">Gandhipuram</text>
          </g>
          <g class="map-area" (click)="selectArea('RS Puram')">
            <path d="M 150 150 L 250 180 L 280 280 L 180 250 Z" fill="var(--news-blue)" opacity="0.7"/>
            <text x="180" y="220" fill="white" font-weight="bold">RS Puram</text>
          </g>
          <g class="map-area" (click)="selectArea('Peelamedu')">
            <path d="M 450 180 L 600 200 L 550 350 L 400 300 Z" fill="var(--kovai-green)" opacity="0.7"/>
            <text x="470" y="260" fill="white" font-weight="bold">Peelamedu</text>
          </g>
        </svg>
      </div>

      <div class="news-list" *ngIf="selectedArea">
        <h2>News from {{ selectedArea }}</h2>
        <ul>
          <li>Breaking news in {{ selectedArea }} 1</li>
          <li>Local update from {{ selectedArea }} 2</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .page-content {
      padding: 2rem 0;
    }
    .page-title {
      font-size: 2.5rem;
      color: var(--kovai-purple);
      margin-bottom: 0.5rem;
    }
    .map-container {
      margin: 2rem 0;
      background: var(--mat-sys-surface-variant);
      border-radius: 8px;
      padding: 1rem;
      border: 1px solid var(--border-color);
    }
    .interactive-map {
      width: 100%;
      height: auto;
      max-height: 500px;
    }
    .map-area {
      cursor: pointer;
      transition: opacity 0.3s ease;
    }
    .map-area:hover {
      opacity: 1;
    }
    .map-area path {
      stroke: white;
      stroke-width: 2;
    }
    .news-list {
      margin-top: 2rem;
      padding: 2rem;
      background: var(--mat-sys-surface);
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
  `]
})
export class MapComponent implements OnInit {
  selectedArea: string | null = null;

  ngOnInit() {
    setTimeout(() => {
      gsap.set('.gsap-reveal', { y: 30, opacity: 0, visibility: 'hidden' });
      gsap.to('.gsap-reveal', {
        opacity: 1,
        visibility: 'visible',
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, 50);
  }

  selectArea(area: string) {
    this.selectedArea = area;
  }
}
