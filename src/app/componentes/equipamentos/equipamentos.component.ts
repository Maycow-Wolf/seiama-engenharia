import { Component } from '@angular/core';
import { Equipamento } from '../../interfaces/equipamento.interface';

@Component({
  selector: 'app-equipamentos',
  standalone: true,
  imports: [],
  templateUrl: './equipamentos.component.html',
  styleUrl: './equipamentos.component.scss'
})
export class EquipamentosComponent {

  indiceAtual = 0;
  inicioToqueX = 0;
  fimToqueX = 0;

  proximo(): void {

    this.indiceAtual =
      (this.indiceAtual + 1) % this.listaEquipamentos.length;

  }

  anterior(): void {
    
    this.indiceAtual =
      (this.indiceAtual - 1 + this.listaEquipamentos.length) % this.listaEquipamentos.length;

  }

  selecionar(indice: number): void {

    this.indiceAtual = indice;
  }

  aoIniciarToque(event: TouchEvent): void {

  this.inicioToqueX = event.changedTouches[0].clientX;

}

aoFinalizarToque(event: TouchEvent): void {

  this.fimToqueX = event.changedTouches[0].clientX;

  const distancia = this.inicioToqueX - this.fimToqueX;

  // Arrastou para esquerda
  if (distancia > 50) {
    this.proximo();
  }

  // Arrastou para direita
  if (distancia < -50) {
    this.anterior();
  }

}

  listaEquipamentos: Equipamento[] = [
    {
      nome: 'Megôhmetro 5KV',
      imagem: 'assets/equipamentos/megger.jpg',
      descricao: 'Teste de resistência de isolamento elétrico.'
    },
    {
      nome: 'Alicate Terrômetro',
      imagem: 'assets/equipamentos/alicate-terrometro.webp',
      descricao: 'Medição de aterramento com precisão e segurança.'
    },
    {
      nome: 'Tempo-Triplo',
      imagem: 'assets/equipamentos/tempo-triplo.png',
      descricao: 'Equipamento utilizado em testes de disjuntores.'
    },
    {
      nome: 'Gerador',
      imagem: 'assets/equipamentos/gerador.webp',
      descricao: 'Equipamento para geração de energia e testes industriais.'
    },
    {
      nome: 'Hipot 60 KV',
      imagem: 'assets/equipamentos/hipot.png',
      descricao: 'Equipamento para testes de alta tensão.'
    },
    {
      nome: 'Microohmímetro',
      imagem: 'assets/equipamentos/microohmimetro.jpg',
      descricao: 'Teste de resistência de contato.'
    },
    {
      nome: 'Termovisor',
      imagem: 'assets/equipamentos/termovisor.webp',
      descricao: 'Inspeção térmica para manutenção preditiva.'
    },
    {
      nome: 'TTR',
      imagem: 'assets/equipamentos/ttr.jpg',
      descricao: 'Teste de relação de transformação em transformadores.'
    },
    {
      nome: 'Caixa de Calibração de Relé',
      imagem: 'assets/equipamentos/caixa-calibracao-rele.webp',
      descricao: 'Calibração e testes em sistemas de proteção.'
    }

  ];

}
