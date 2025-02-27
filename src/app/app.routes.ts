import { Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { content } from './shared/routes/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/first-page',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentComponent,
    children: content
  },
  {
    path: '**',
    redirectTo: ''
  }
  ];
  