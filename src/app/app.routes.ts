import { Routes } from '@angular/router';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: '', redirectTo: '/terms', pathMatch: 'full' },
  { path: '**', redirectTo: '/terms' }
];
