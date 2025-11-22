import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Funcionario } from '../funcionarios.interface';
import { FuncionariosService } from '../funcionarios.service';
import { IdiomaService } from '../../../services/idioma.service';
import { Router } from '@angular/router';
import { TemaService } from '../../../services/tema.service';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionarioFormComponent {
  @Input() id?: number;

  funcionario: Funcionario = {
    id: 0,
    nome: '',
    cargo: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    email: '',
    telefone: '',
    salario: 0,
    beneficios: 0,
    formacao: '',
    cursos: '',
    dataContratacao: '',
    dataDemissao: '',
    tipoContrato: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: ''
  };

  sidebarAberta: boolean = true;
  currentStep = 1;

  mensagem: string = '';
  sucesso: boolean = true;
  private mensagemTimeout: any;

  constructor(
    private service: FuncionariosService,
    public idiomaService: IdiomaService,
    private temaService: TemaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.aberta$.subscribe(valor => {
      this.sidebarAberta = valor;
    });

    const temaSalvo = localStorage.getItem('theme') || 'white';
    this.temaService.setTema(temaSalvo);

    const idiomaSalvo = localStorage.getItem('idioma') || 'pt-br';
    this.idiomaService.carregarIdioma(idiomaSalvo);

    if (this.id) {
      this.service.obterPorId(this.id).subscribe(f => {
        this.funcionario = f;
      });
    }
  }

  nextStep(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.mostrarMensagem('Preencha todos os campos obrigatórios!', false);
      return;
    }
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  salvarFuncionario() {
    if (this.id) {
      this.service.atualizar(this.funcionario).subscribe({
        next: () => {
          this.mostrarMensagem('Funcionário atualizado com sucesso!', true);
          this.router.navigate(['/funcionarios']); // <- vai para a lista
        },
        error: () => this.mostrarMensagem('Erro ao atualizar funcionário.', false)
      });
    } else {
      this.service.cadastrar(this.funcionario).subscribe({
        next: () => {
          this.mostrarMensagem('Funcionário cadastrado com sucesso!', true);
          this.router.navigate(['/funcionarios']); // <- vai para a lista
        },
        error: () => this.mostrarMensagem('Erro ao cadastrar funcionário.', false)
      });
    }
  }


  mostrarMensagem(msg: string, sucesso: boolean) {
    this.mensagem = msg;
    this.sucesso = sucesso;

    if (this.mensagemTimeout) {
      clearTimeout(this.mensagemTimeout);
    }

    this.mensagemTimeout = setTimeout(() => {
      this.mensagem = '';
      this.mensagemTimeout = null;
    }, 30000);
  }
}
