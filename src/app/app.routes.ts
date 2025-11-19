import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'funcionarios',
        loadComponent: () =>
          import('./features/funcionarios/list/funcionarios-list.component')
            .then(m => m.FuncionariosListComponent)
      },
      {
        path: 'funcionarios/novo',
        loadComponent: () =>
          import('./features/funcionarios/form/funcionarios-form.component')
            .then(m => m.FuncionariosFormComponent)
      },
      {
        path: 'funcionarios/editar/:id',
        loadComponent: () =>
          import('./features/funcionarios/form/funcionarios-form.component')
            .then(m => m.FuncionariosFormComponent)
      }
    ]
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component')
        .then(m => m.LoginComponent)
  }
];
