import { Routes } from '@angular/router';
import { AdminGuard } from './shared/guard/admin.guard';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { LoginComponent } from './auth/login/login.component';
import { content } from './shared/routes/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/first-page',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponent,  
  },
  {
    path: '',
    component: ContentComponent,
    children: content,
    canActivate: [AdminGuard], 
  },
  {
    path: '**',
    redirectTo: ''
  }
  ];
  