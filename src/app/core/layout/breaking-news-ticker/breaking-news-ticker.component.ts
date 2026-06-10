import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breaking-news-ticker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ticker-wrap">
      <div class="ticker-label">BREAKING NEWS</div>
      <div class="ticker-content">
        <div class="ticker-items">
          <div class="ticker-item" *ngFor="let news of breakingNews">
            <span class="dot"></span> {{ news }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ticker-wrap {
      display: flex;
      background: var(--kovai-purple);
      color: white;
      height: 40px;
      overflow: hidden;
      align-items: center;
    }
    .ticker-label {
      background: var(--news-blue);
      color: white;
      font-weight: bold;
      padding: 0 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      z-index: 10;
      white-space: nowrap;
    }
    .ticker-content {
      flex-grow: 1;
      overflow: hidden;
      position: relative;
    }
    .ticker-items {
      display: flex;
      white-space: nowrap;
      animation: ticker 20s linear infinite;
    }
    .ticker-items:hover {
      animation-play-state: paused;
    }
    .ticker-item {
      padding: 0 2rem;
      display: flex;
      align-items: center;
    }
    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: var(--kovai-green);
      border-radius: 50%;
      margin-right: 8px;
    }
    @keyframes ticker {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `]
})
export class BreakingNewsTickerComponent implements OnInit {
  breakingNews: string[] = [
    'Heavy rain expected in Coimbatore tomorrow',
    'New IT park announced in Saravanampatti',
    'Traffic diversions at Gandhipuram for flyover work',
    'Local sports team wins state championship'
  ];

  ngOnInit() {}
}
