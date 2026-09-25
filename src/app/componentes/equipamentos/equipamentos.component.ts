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
      descricao: 'Teste de resistência ôhmica de isolamento elétrico.'
    },
    {
      nome: 'Alicate Terrômetro',
      imagem: 'assets/equipamentos/alicate-terrometro.jpg',
      descricao: 'Medição de aterramento e correntes de fuga com precisão e segurança.'
    },
    {
      nome: 'Tempo-Triplo',
      imagem: 'assets/equipamentos/tempo-triplo.jpg',
      descricao: 'Equipamento utilizado para medir de forma precisa e simultânea o tempo de abertura e fechamento dos contatos.'
    },
    {
      nome: 'Gerador',
      imagem: 'assets/equipamentos/gerador.jpg',
      descricao: 'Equipamento para geração de energia e testes industriais.'
    },
    {
      nome: 'Hipot 60 KV',
      imagem: 'assets/equipamentos/hipot.jpg',
      descricao: 'Equipamento usado para realizar o ensaio de rigidez dielétrica e verificar a qualidade do isolamento elétrico.'
    },
    {
      nome: 'Microohmímetro',
      imagem: 'assets/equipamentos/microohmimetro.jpg',
      descricao: 'Instrumento eletrônico de alta precisão projetado para medir resistências de contato e integridade dos enrolamentos.'
    },
    {
      nome: 'Termovisor',
      imagem: 'assets/equipamentos/termovisor.jpg',
      descricao: 'Dispositivo portátil para inspeção térmica dos equipamentos.'
    },
    {
      nome: 'TTR',
      imagem: 'assets/equipamentos/ttr.jpg',
      descricao: 'Instrumento de ensaio elétrico essencial que mede a relação de transformação em transformadores.'
    },
    {
      nome: 'Caixa de Calibração de Relé',
      imagem: 'assets/equipamentos/caixa-calibracao-rele.jpg',
      descricao: 'O principal instrumento utilizado para a aferição, ensaio e calibração de relés de proteção elétrica.'
    }

  ];

}
