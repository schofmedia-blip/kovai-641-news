import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AdBannerComponent } from '../../shared/components/ad-banner/ad-banner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { gsap } from 'gsap';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, AdBannerComponent, MatButtonModule, MatIconModule, MatDividerModule],
  template: `
    <div class="container news-detail-container">
      <article class="news-article gsap-reveal">
        <header>
          <h1>Sample News Headline for {{ slug }}</h1>
          <div class="meta">
            <span class="author"><mat-icon>person</mat-icon> Reporter Name</span>
            <span class="date"><mat-icon>calendar_today</mat-icon> Oct 25, 2023</span>
          </div>
        </header>

        <img src="https://via.placeholder.com/1200x600" alt="News Featured Image" class="featured-image">

        <div class="ai-summary">
          <mat-icon>auto_awesome</mat-icon>
          <div>
            <strong>Quick Summary:</strong>
            <p>This is an AI-generated concise summary of the news article. It provides the key takeaways in a few sentences, saving time for the reader.</p>
          </div>
        </div>

        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
          <p>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
          <app-ad-banner height="90px"></app-ad-banner>
          <p>Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.</p>
        </div>

        <mat-divider></mat-divider>

        <div class="actions-section">
          <div class="reactions">
            <button mat-button><mat-icon>thumb_up</mat-icon> 124</button>
            <button mat-button><mat-icon>favorite</mat-icon> 56</button>
            <button mat-button><mat-icon>sentiment_dissatisfied</mat-icon> 12</button>
          </div>
          <div class="tts">
            <button mat-raised-button color="accent">
              <mat-icon>volume_up</mat-icon> Listen
            </button>
          </div>
        </div>

      </article>

      <aside class="sidebar gsap-reveal">
        <app-ad-banner height="300px" altText="Sidebar Ad"></app-ad-banner>
        <div class="trending">
          <h3>Trending</h3>
          <ul>
            <li><a href="#">Coimbatore specific news 1</a></li>
            <li><a href="#">Tamil Nadu specific news 2</a></li>
            <li><a href="#">Sports update 3</a></li>
          </ul>
        </div>
      </aside>
    </div>
  `,
  styles: [`
    .news-detail-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-top: 2rem;
    }
    @media (min-width: 992px) {
      .news-detail-container {
        grid-template-columns: 2fr 1fr;
      }
    }
    .news-article h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    .meta {
      display: flex;
      gap: 1rem;
      color: var(--mat-sys-on-surface-variant);
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
    }
    .meta span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .meta mat-icon {
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
    }
    .featured-image {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 2rem;
    }
    .ai-summary {
      background-color: rgba(145, 39, 142, 0.1);
      border-left: 4px solid var(--kovai-purple);
      padding: 1rem;
      border-radius: 0 8px 8px 0;
      margin-bottom: 2rem;
      display: flex;
      gap: 1rem;
    }
    .ai-summary mat-icon {
      color: var(--kovai-purple);
    }
    .content {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }
    .content p {
      margin-bottom: 1.5rem;
    }
    .actions-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      padding: 1rem 0;
    }
    .trending h3 {
      border-bottom: 2px solid var(--news-blue);
      padding-bottom: 0.5rem;
      margin-top: 2rem;
    }
    .trending ul {
      list-style: none;
      padding: 0;
    }
    .trending li {
      padding: 1rem 0;
      border-bottom: 1px solid var(--border-color);
    }
    .trending a {
      color: var(--mat-sys-on-surface);
      text-decoration: none;
      font-weight: 500;
    }
    .trending a:hover {
      color: var(--news-blue);
    }
  `]
})
export class NewsDetailComponent implements OnInit {
  slug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      this.animateEntrance();
    });
  }

  animateEntrance() {
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
}
