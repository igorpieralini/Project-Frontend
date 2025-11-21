import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionarios.interface';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private api = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.api);
  }
}
