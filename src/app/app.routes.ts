import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'about' }
];
