import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Funcionario {
  id?: number;
  nome: string;
  cargo: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private apiUrl = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.apiUrl}/${id}`);
  }

  cadastrar(f: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, f);
  }

  salvar(f: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, f);
  }

  atualizar(id: number, f: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.apiUrl}/${id}`, f);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
