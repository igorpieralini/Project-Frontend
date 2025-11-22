import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TemaService {
  private temaAtual = new BehaviorSubject<string>(this.getTemaSalvo());
  public tema$ = this.temaAtual.asObservable();

  constructor() {
    this.applyTheme(this.getTemaSalvo());
  }

  setTema(tema: string) {
    localStorage.setItem('theme', tema);
    this.temaAtual.next(tema);
    this.applyTheme(tema);
  }

  private getTemaSalvo(): string {
    return localStorage.getItem('theme') || 'white';
  }

  private applyTheme(tema: string) {
    document.documentElement.setAttribute('data-theme', tema);
  }
}
