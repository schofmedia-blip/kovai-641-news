import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBannerComponent } from '../../shared/components/ad-banner/ad-banner.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  hasVideo: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AdBannerComponent, RouterModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  template: `
    <div class="container">
      <!-- Hero Section -->
      <section class="hero-section gsap-reveal">
        <div class="hero-content">
          <mat-chip-set>
            <mat-chip color="warn" highlighted="true">Breaking</mat-chip>
          </mat-chip-set>
          <h1>Legendary Director Bharathiraja Passes Away, CM Vijay Announces State Honours</h1>
          <p>The state is mourning the death of the legendary Tamil film director. CM C. Joseph Vijay has announced state honours.</p>
          <button mat-raised-button color="primary">Read More</button>
        </div>
      </section>

      <app-ad-banner height="120px"></app-ad-banner>

      <!-- Latest News -->
      <section class="latest-news gsap-reveal">
        <h2>Latest News (TN, Kerala, India)</h2>
        <div class="news-grid">
          <mat-card *ngFor="let news of latestNews" class="news-card">
            <div class="image-container">
              <img mat-card-image [src]="news.imageUrl" [alt]="news.title">
              <div *ngIf="news.hasVideo" class="video-badge">
                <mat-icon>play_circle_filled</mat-icon> Video
              </div>
              <div class="category-badge">{{ news.category }}</div>
            </div>
            <mat-card-content>
              <h3>{{ news.title }}</h3>
              <p>{{ news.description }}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary" [routerLink]="'/news/' + news.id">Read More</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1572204292164-b35ba943fca7?q=80&w=1200&auto=format&fit=crop') no-repeat center center;
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
      max-width: 800px;
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
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .news-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .image-container {
      position: relative;
    }
    .image-container img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      margin: 0;
      display: block;
    }
    .video-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.8rem;
      font-weight: bold;
    }
    .category-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: var(--kovai-purple, #6200ea);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--kovai-purple, #6200ea);
      border-bottom: 2px solid var(--kovai-green, #00c853);
      display: inline-block;
      padding-bottom: 0.5rem;
    }
    mat-card-content {
      flex-grow: 1;
    }
    mat-card-content h3 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    mat-card-content p {
      color: #555;
      font-size: 0.95rem;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  latestNews: NewsItem[] = [
    {
      id: 1,
      title: 'CM Orders 24x7 Drinking Water Supply in All TN Municipal Corporations',
      description: 'Chief Minister has directed officials to ensure uninterrupted drinking water supply across all 25 municipal corporations in Tamil Nadu to tackle water scarcity.',
      imageUrl: 'https://images.unsplash.com/photo-1541888087405-b003c3e2dc40?q=80&w=600&auto=format&fit=crop',
      category: 'Tamil Nadu',
      hasVideo: false
    },
    {
      id: 2,
      title: 'Heavy Rains & Thunderstorms Forecast for Kerala Amid Southwest Monsoon',
      description: 'The IMD has issued a weather alert predicting heavy rainfall and strong winds across Kerala over the next few days as the monsoon intensifies.',
      imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=600&auto=format&fit=crop',
      category: 'Kerala',
      hasVideo: true
    },
    {
      id: 3,
      title: 'Kerala Cabinet Approves "Priyadarshini" Free Travel Scheme for Women',
      description: 'Starting June 15, women in Kerala can travel for free on KSRTC ordinary services under the newly launched Priyadarshini scheme.',
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&auto=format&fit=crop',
      category: 'Kerala',
      hasVideo: false
    },
    {
      id: 4,
      title: 'PM Modi to Hold Key Meeting with NDA Chief Ministers Today',
      description: 'Prime Minister Narendra Modi is scheduled to meet Chief Ministers and Deputy Chief Ministers of NDA-ruled states alongside the NITI Aayog Governing Council meeting.',
      imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1d3166113?q=80&w=600&auto=format&fit=crop',
      category: 'India',
      hasVideo: true
    },
    {
      id: 5,
      title: 'India Lodges Strong Protest Following Disappearance of Sailors',
      description: 'The Indian government has issued a strong protest with the US Embassy over attacks on commercial vessels that left three Indian sailors missing.',
      imageUrl: 'https://images.unsplash.com/photo-1584285404554-159424750e41?q=80&w=600&auto=format&fit=crop',
      category: 'India',
      hasVideo: false
    },
    {
      id: 6,
      title: 'Tamil Nadu Government Launches "Singappen" Special Force',
      description: "To enhance women's safety in the state, the Tamil Nadu government has officially launched the Singappen special police force.",
      imageUrl: 'https://images.unsplash.com/photo-1605371924599-2d0365da26f5?q=80&w=600&auto=format&fit=crop',
      category: 'Tamil Nadu',
      hasVideo: true
    }
  ];

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
