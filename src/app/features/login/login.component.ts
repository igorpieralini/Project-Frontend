import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { IdiomaService } from '../../services/idioma.service';
import { TemaService } from '../../services/tema.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';
  erro = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    public idiomaService: IdiomaService,
    private temaService: TemaService
  ) {}

  ngOnInit(): void {
    const temaSalvo = localStorage.getItem('theme') || 'white';
    this.temaService.setTema(temaSalvo);

    const idiomaSalvo = localStorage.getItem('idioma') || 'pt-br';
    this.idiomaService.carregarIdioma(idiomaSalvo);
  }


  entrar() {
    const url = 'http://localhost:8080/auth/login';
    this.http.post<any>(url, { email: this.email, senha: this.senha }).subscribe({
      next: (res: any) => {
        if (res && res.id) {
          localStorage.setItem('token', res.id.toString());
          this.router.navigate(['/funcionarios/list']);
        } else {
          this.erro = 'Email ou senha inválidos';
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.error && err.error.message) {
          this.erro = err.error.message;
        } else if (err.status === 0) {
          this.erro = 'Não foi possível conectar com o servidor.';
        } else {
          this.erro = `Erro ${err.status}: ${err.statusText}`;
        }
      }
    });
  }
}
