# Angular Frontend Project

Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 20.3.10. O objetivo do projeto é **estudo de Angular e Spring Boot (Java)**, criando um sistema simples de integração com Backend e Frontend separados, **utilizando MySQL como banco de dados**.

O sistema inclui:

* Sistema de Login
* Sistema de consulta de funcionários
* Sistema de adicionar funcionários
* Sistema de remoção de funcionários

---

## 🚀 Iniciando o Servidor de Desenvolvimento / Build do Projeto

Para rodar o projeto localmente e acompanhar as alterações em tempo real:

```bash
ng serve
```

Em seguida, abra seu navegador em:

```
http://localhost:4200/
```

Para gerar o build de produção otimizado para performance e tamanho mínimo:

```bash
ng build
```

Os arquivos compilados serão armazenados na pasta `dist/`.

---

## 🏗️ Estrutura do Projeto

Segue a estrutura principal do frontend:

```
frontend/
 ├─ .angular/
 ├─ node_modules/
 ├─ public/
 │   ├─ styles/
 │   └─ favicon.ico
 └─ src/
     ├─ app/
     │   ├─ core/
     │   ├─ features/
     │   └─ shared/
     ├─ environments/
     └─ index.html
```

Essa organização permite separar claramente módulos centrais (`core`), funcionalidades (`features`) e componentes compartilhados (`shared`).

---

## 💻 Rodando o Projeto com Git

Para clonar e executar este projeto, utilize os comandos abaixo:

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

Desenvolvedor: **Igor Pieralini**
