import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosService } from '../funcionarios.service';
import { Funcionario } from '../funcionarios.interface';
import { IdiomaService } from '../../../services/idioma.service';
import { TemaService } from '../../../services/tema.service';

@Component({
  selector: 'app-funcionarios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css']
})
export class FuncionariosListComponent {

  funcionarios: Funcionario[] = [];

  constructor(
    private service: FuncionariosService,
    public idiomaService: IdiomaService,
    private temaService: TemaService
  ) {}

  ngOnInit(): void {
    const temaSalvo = localStorage.getItem('theme') || 'white';
    this.temaService.setTema(temaSalvo);

    const idiomaSalvo = localStorage.getItem('idioma') || 'pt-br';
    this.idiomaService.carregarIdioma(idiomaSalvo);

    this.service.listar().subscribe((res) => {
      this.funcionarios = res;
    });
  }
}
