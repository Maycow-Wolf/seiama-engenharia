import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnInit, OnDestroy {

  imagens: string[] = [
    'assets/imagem-1.jpg',
    'assets/imagem-2.jpg',
    'assets/imagem-3.jpg',
    'assets/imagem-4.jpg',
    'assets/imagem-5.jpg',
    'assets/imagem-6.jpg',
    'assets/imagem-7.jpg'
  ];

  imagemAtual: string =
    'assets/imagem-1.jpg';

  indiceAtual = 0;

  intervalo: any;

  ngOnInit(): void {

    this.iniciarSlide();

  }

  iniciarSlide(): void {

    this.intervalo = setInterval(() => {

      this.indiceAtual++;

      if (this.indiceAtual >= this.imagens.length) {
        this.indiceAtual = 0;
      }

      this.imagemAtual =
        this.imagens[this.indiceAtual];

    }, 4000);

  }

  ngOnDestroy(): void {

    clearInterval(this.intervalo);

  }

}
