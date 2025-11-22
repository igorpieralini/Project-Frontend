import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IdiomaService {
  private idiomaAtual = new BehaviorSubject<any>(null);
  public textos$ = this.idiomaAtual.asObservable();

  constructor(private http: HttpClient) {
    const idiomaSalvo = localStorage.getItem('idioma') || 'pt-br';
    this.carregarIdioma(idiomaSalvo);
  }

  carregarIdioma(idioma: string) {
    this.http.get(`assets/i18n/${idioma}.json`).subscribe({
      next: (json: any) => {
        this.idiomaAtual.next(json);
        localStorage.setItem('idioma', idioma);
      },
      error: () => {
        console.error(`Não foi possível carregar o idioma: ${idioma}`);
      }
    });
  }

  getIdiomaAtual(): string {
    return localStorage.getItem('idioma') || 'pt-br';
  }
}
