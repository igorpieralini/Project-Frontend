import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Funcionario } from './funcionarios.interface';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private api = 'http://localhost:8080/funcionarios';

  private _aberta = new BehaviorSubject<boolean>(true);
  aberta$ = this._aberta.asObservable();

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.api);
  }

  obterPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.api}/${id}`);
  }

  cadastrar(func: Funcionario): Observable<any> {
    return this.http.post(this.api, func);
  }

  atualizar(func: Funcionario): Observable<any> {
    return this.http.put(`${this.api}/${func.id}`, func);
  }

  toggleSidebar() {
    this._aberta.next(!this._aberta.value);
  }

  setAberta(valor: boolean) {
    this._aberta.next(valor);
  }
}
