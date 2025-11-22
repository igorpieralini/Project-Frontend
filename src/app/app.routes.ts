import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'funcionarios',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./features/funcionarios/list/funcionarios-list.component')
            .then(m => m.FuncionariosListComponent)
      },
      {
        path: 'form',
        loadComponent: () =>
          import('./features/funcionarios/form/funcionarios-form.component')
            .then(m => m.FuncionarioFormComponent)
      },
      {
        path: 'editar/:id',
        loadComponent: () =>
          import('./features/funcionarios/form/funcionarios-form.component')
            .then(m => m.FuncionarioFormComponent)
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];
