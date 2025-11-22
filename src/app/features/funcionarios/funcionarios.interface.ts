export interface Funcionario {
  id: number;
  nome: string;
  cargo: string;

  cpf: string;
  rg: string;
  dataNascimento: string;

  email: string;
  telefone: string;

  salario: number;
  beneficios: number;
  formacao: string;
  cursos: string;

  dataContratacao: string;
  dataDemissao: string;
  tipoContrato: string;

  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
}
