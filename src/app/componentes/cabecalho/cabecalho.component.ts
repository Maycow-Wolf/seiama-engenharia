import { Component, signal } from '@angular/core';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {

  readonly Menu = Menu;
  readonly X = X;

  menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update(valor => !valor);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }
  
}
