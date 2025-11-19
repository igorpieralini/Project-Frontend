import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuncionariosService, Funcionario } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css']
})
export class FuncionariosListComponent {

  funcionarios: Funcionario[] = [];

  constructor(private service: FuncionariosService) {}

  ngOnInit() {
    this.service.listar().subscribe((res: Funcionario[]) => this.funcionarios = res);
  }
}
