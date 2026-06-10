import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeClass = 'dark-theme';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkTheme();
    }
  }

  enableDarkTheme() {
    document.body.classList.add(this.darkThemeClass);
    localStorage.setItem('theme', 'dark');
  }

  disableDarkTheme() {
    document.body.classList.remove(this.darkThemeClass);
    localStorage.setItem('theme', 'light');
  }

  toggleTheme() {
    if (document.body.classList.contains(this.darkThemeClass)) {
      this.disableDarkTheme();
    } else {
      this.enableDarkTheme();
    }
  }

  isDarkTheme(): boolean {
    return document.body.classList.contains(this.darkThemeClass);
  }
}
