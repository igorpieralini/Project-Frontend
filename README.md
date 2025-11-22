# Angular Frontend Project

Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 20.3.10. O objetivo do projeto é **estudo de Angular e Spring Boot (Java)**, criando um sistema completo com **Frontend e Backend separados**, **integrado com MySQL no backend**.

O sistema inclui:

* Sistema de **Login** de usuários.
* Sistema de **consulta/listagem de funcionários**.
* Sistema de **adicionar, atualizar e remover funcionários**.
* Suporte a **Tema** (claro/escuro) e **Idioma** (multi-idioma).

---

## 🚀 Iniciando o Servidor de Desenvolvimento / Build do Projeto

Para rodar o projeto localmente e acompanhar alterações em tempo real:

```bash
ng serve
```

Em seguida, abra o navegador em:

```
http://localhost:4200/
```

Para gerar o build de produção otimizado:

```bash
ng build --prod
```

Os arquivos compilados serão armazenados na pasta `dist/`.

---

## 🏗️ Estrutura do Projeto

```
frontend/
 ├─ .angular/
 ├─ node_modules/
 ├─ public/
 │   ├─ styles/
 │   └─ favicon.ico
 └─ src/
     ├─ app/
     │   ├─ core/                 # Módulos centrais (layout, interceptors, guards, services globais)
     │   │   ├─ layout/
     │   │   ├─ services/
     │   │   └─ core.module.ts
     │   ├─ features/             # Funcionalidades específicas (ex: Funcionarios, Login)
     │   │   ├─ funcionarios/
     │   │   │   ├─ components/   # Componentes de listagem, cadastro, edição
     │   │   │   ├─ services/     # Serviço para integração com backend
     │   │   │   └─ funcionarios.module.ts
     │   │   └─ login/
     │   │       ├─ components/   # Componentes de login e autenticação
     │   │       └─ login.module.ts
     │   └─ shared/                # Componentes e utilitários compartilhados (botões, modais, pipes, diretivas)
     ├─ environments/             # Configurações de ambiente (dev, prod)
     └─ index.html
```

Esta estrutura permite separar claramente **módulos centrais, funcionalidades específicas e componentes compartilhados**, facilitando manutenção, escalabilidade e reaproveitamento de código.

---

## 💻 Funcionalidades Detalhadas

### Funcionários

* **Listagem**: exibe todos os funcionários do backend, atualizando em tempo real.
* **Adicionar funcionário**: formulário integrado com backend para criar novos registros.
* **Atualizar funcionário**: editar dados de um funcionário existente.
* **Remover funcionário**: excluir funcionários pelo ID.

### Personalização

* **Tema**: suporte a modos claro e escuro, configuráveis pelo usuário.
* **Idioma**: suporte a múltiplos idiomas, podendo alternar entre português e inglês.

### Integração com Backend

* Todas as operações de CRUD utilizam **HttpClient** para comunicação com o backend Spring Boot (`http://localhost:8080`).
* Uso de **BehaviorSubject** para gerenciar estado global (ex: sidebar aberta/fechada).

---

## 🔧 Rodando com Git

```bash
# Clonar o repositório
git clone https://github.com/igorpieralini/Project-Frontend.git

# Entrar na pasta do projeto
cd Project-Frontend

# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
ng serve
```

---

Desenvolvedor: **Igor Pieralini**
Tecnologias: **Angular 20, TypeScript, HTML, CSS, RxJS, HttpClient**
Integração: **Spring Boot (Java) + MySQL**
