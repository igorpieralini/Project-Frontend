import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FuncionariosService } from '../../features/funcionarios/funcionarios.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  sidebarAberta: boolean = true;

  constructor(private funcionariosService: FuncionariosService) {
    this.funcionariosService.aberta$.subscribe(valor => this.sidebarAberta = valor);
  }

  toggleSidebar() {
    this.funcionariosService.toggleSidebar();
  }
}
