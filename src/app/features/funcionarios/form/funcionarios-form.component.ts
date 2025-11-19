import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  funcionario: any = {
    nome: '',
    cargo: '',
    email: ''
  };

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FuncionariosService
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.service.buscar(this.id).subscribe((res: any) => this.funcionario = res);
    }
  }

  salvar() {
    if (this.id) {
      this.service.atualizar(this.id, this.funcionario).subscribe(() =>
        this.router.navigate(['/funcionarios'])
      );
    } else {
      this.service.cadastrar(this.funcionario).subscribe(() =>
        this.router.navigate(['/funcionarios'])
      );
    }
  }
}
