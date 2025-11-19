import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const logado = localStorage.getItem('token');

    if (!logado) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
