import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // rota de login sem layout
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then(m => m.LoginComponent)
  },

  // rotas protegidas com header + sidebar
  {
    path: 'funcionarios',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/funcionarios/list/funcionarios-list.component')
            .then(m => m.FuncionariosListComponent)
      },
      {
        path: 'novo',
        loadComponent: () =>
          import('./features/funcionarios/form/funcionarios-form.component')
            .then(m => m.FuncionariosFormComponent)
      },
      {
        path: 'editar/:id',
        loadComponent: () =>
          import('./features/funcionarios/form/funcionarios-form.component')
            .then(m => m.FuncionariosFormComponent)
      }
    ]
  }
];
