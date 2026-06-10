import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  updateTitle(title: string) {
    this.title.setTitle(`${title} | KOVAI 641 NEWS`);
  }

  updateMetaTags(metaTags: { name: string; content: string }[]) {
    metaTags.forEach(m => this.meta.updateTag(m));
  }

  setArticleMeta(title: string, description: string, imageUrl: string, url: string) {
    this.updateTitle(title);
    this.updateMetaTags([
      { name: 'description', content: description },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: imageUrl },
      { name: 'og:url', content: url }
    ]);
  }
}
