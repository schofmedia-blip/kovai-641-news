import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'news/:slug', loadComponent: () => import('./pages/news-detail/news-detail.component').then(m => m.NewsDetailComponent) },
  { path: 'videos', loadComponent: () => import('./pages/videos/videos.component').then(m => m.VideosComponent) },
  { path: 'map', loadComponent: () => import('./pages/map/map.component').then(m => m.MapComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent) },
  { path: '**', redirectTo: '' }
];
