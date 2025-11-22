import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IdiomaService } from '../../../services/idioma.service';
import { TemaService } from '../../../services/tema.service';
import { FuncionariosService } from '../../../features/funcionarios/funcionarios.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sidebarAberta: boolean = false;

  constructor(
    public idiomaService: IdiomaService,
    private temaService: TemaService,
    private router: Router,
    private funcionariosService: FuncionariosService
  ) {}

  ngOnInit(): void {
    this.funcionariosService.aberta$.subscribe(valor => {
      this.sidebarAberta = valor;
    });
  }

  setLanguage(lang: string) {
    this.idiomaService.carregarIdioma(lang);
  }

  setTheme(theme: string) {
    this.temaService.setTema(theme);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
