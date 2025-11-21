import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosService } from '../funcionarios.service';
import { Funcionario } from '../funcionarios.interface';

@Component({
  selector: 'app-funcionarios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css', '../../../../../public/styles/theme.css']
})
export class FuncionariosListComponent {

  funcionarios: Funcionario[] = [];

  constructor(private service: FuncionariosService) {}

  ngOnInit() {
    this.service.listar().subscribe(res => this.funcionarios = res);
  }
}
