import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container page-content">
      <h1 class="page-title gsap-reveal">Video News</h1>
      <div class="video-grid">
        <div class="video-card gsap-reveal" *ngFor="let i of [1,2,3,4,5,6]">
          <div class="video-wrapper">
             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>Video Title {{ i }}</h3>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-content {
      padding: 2rem 0;
    }
    .page-title {
      font-size: 2.5rem;
      color: var(--news-blue);
      margin-bottom: 2rem;
    }
    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
    }
    .video-card h3 {
      margin-top: 1rem;
      font-weight: 600;
    }
    .video-wrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `]
})
export class VideosComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      gsap.set('.gsap-reveal', { y: 30, opacity: 0, visibility: 'hidden' });
      gsap.to('.gsap-reveal', {
        opacity: 1,
        visibility: 'visible',
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, 50);
  }
}
