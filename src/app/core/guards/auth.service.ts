import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, senha }).pipe(
      tap(res => {
        localStorage.setItem('token', res.id);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
