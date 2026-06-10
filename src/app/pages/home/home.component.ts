import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBannerComponent } from '../../shared/components/ad-banner/ad-banner.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AdBannerComponent, RouterModule, MatCardModule, MatButtonModule, MatChipsModule],
  template: `
    <div class="container">
      <!-- Hero Section -->
      <section class="hero-section gsap-reveal">
        <div class="hero-content">
          <mat-chip-set>
            <mat-chip color="warn" highlighted="true">Breaking</mat-chip>
          </mat-chip-set>
          <h1>Coimbatore to get new Metro expansion by 2026</h1>
          <p>The state government has announced the expansion of the metro project covering major hubs like Gandhipuram and Ukkadam.</p>
          <button mat-raised-button color="primary">Read More</button>
        </div>
      </section>

      <app-ad-banner height="120px"></app-ad-banner>

      <!-- Latest News -->
      <section class="latest-news gsap-reveal">
        <h2>Latest News</h2>
        <div class="news-grid">
          <mat-card *ngFor="let i of [1,2,3,4,5,6]" class="news-card">
            <img mat-card-image src="https://via.placeholder.com/400x200" alt="News Image">
            <mat-card-content>
              <h3>Sample News Headline {{ i }}</h3>
              <p>Short description of the news goes here. It provides a quick summary.</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary" routerLink="/news/sample-{{i}}">Read More</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://via.placeholder.com/1200x500') no-repeat center center;
      background-size: cover;
      color: white;
      padding: 4rem 2rem;
      border-radius: 8px;
      margin: 2rem 0;
      min-height: 400px;
      display: flex;
      align-items: flex-end;
    }
    .hero-content {
      max-width: 600px;
    }
    .hero-content h1 {
      font-size: 2.5rem;
      font-weight: 900;
      margin: 1rem 0;
      line-height: 1.2;
    }
    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }
    .news-card {
      transition: transform 0.3s ease;
    }
    .news-card:hover {
      transform: translateY(-5px);
    }
    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--kovai-purple);
      border-bottom: 2px solid var(--kovai-green);
      display: inline-block;
      padding-bottom: 0.5rem;
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit() {}

  ngAfterViewInit() {
    gsap.set('.gsap-reveal', { y: 30 });
    gsap.to('.gsap-reveal', {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2
    });
  }
}
