import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IdiomaService } from '../../../services/idioma.service';
import { TemaService } from '../../../services/tema.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarAberta = false;

  constructor(
    public idiomaService: IdiomaService,
    private temaService: TemaService,
    private router: Router
  ) {}

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
