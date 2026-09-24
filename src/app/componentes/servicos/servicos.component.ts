import { Component, HostListener } from '@angular/core';
import { Servico } from '../../interfaces/servico.interface';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})

export class ServicosComponent {

  servicoAberto: Servico | null = null;

  listaServicos: Servico[] = [
    {
      titulo: 'Manutenção Elétrica Industrial',
      descricao: 'Manutenção preventiva, preditiva e corretiva normatizados, que avaliam as condições físicas e operacionais \
      dos equipamentos elétricos industriais de média e alta tensão.',
      icone: '🏭',
      expandido: false
    },
    {
      titulo: 'Medição de aterramento e SPDA',
      descricao: 'Elaboração de documento técnico conforme norma NBR-5419, por meio de medições e ispeções que avalia a integridade e a eficácia do sistema.\
      Garantindo que a estrutura e os equipamentos estejam seguros contra raios, servindo de base para a emissão do Laudo Técnico.',
      icone: '⚡',
      expandido: false
    },
    {
      titulo: 'Medição da Resistividade do solo',
      descricao: 'Análise técnica que estuda o terreno da sua obra para entender como ele conduz eletricidade. Através de testes de campo normatizados \
      (como o Método de Wenner), mapeamos o comportamento do solo antes de construir o sistema elétrico. Garante que o seu projeto atenda rigorosamente \
      às normas exigidas (como a ABNT NBR 7117) para vistorias e auditorias.',
      icone: '⛰️',
      expandido: false
    },
    {
      titulo: 'Medição da Malha de aterramento',
      descricao: 'Análise que avalia a eficiência e a saúde da estrutura dos cabos, conexões e hastes, bem como, \
      cabos rompidos ou hastes oxidadas. Atendendo às exigências legais (como a NR-10 e ABNT NBR 5410).',
      icone: '🔍',
      expandido: false
    },
    {
      titulo: 'Análise Termográfica',
      descricao: 'Inspeção preventiva que detecta superaquecimento invisível a olho nu, causado por mau contato, sobrecarga ou desgaste de componentes. \
      Mais de 30% dos incêndios industriais começam em falhas elétricas. A termografia localiza e corrige o risco no início.',
      icone: '🌡️',
      expandido: false
    },
    {
      titulo: 'Comissionamento',
      descricao: 'Conjunto de testes e ensaios elétricos rigorosos realizados em transformadores, disjuntores, relés de proteção e chaves seccionadoras \
      de uma subestação antes de ela entrar em operação. Esse processo detecta defeitos internos ocultos ou erros de montagem que poderiam causar falhas graves na energização.',
      icone: '⚙️',
      expandido: false
    },
    {
      titulo: 'Teste e Parametrização de relés',
      descricao: 'É o serviço de configuração e validação dos relés de proteção. Garantindo que o relé detecte anomalias em milissegundos, salvando os \
      equipamentos de uma sobrecarga e evitando que uma falha simples derrube a energia. Atendendo aos requisitos e normas de segurança para a operação das plantas industriais.',
      icone: '🛡️',
      expandido: false
    },
    {
      titulo: 'Diagramas unifilares',
      descricao: 'Mapeamento e elaboração técnico completo que desenha toda a estrutura elétrica da sua empresa em um único diagrama simplificado. Nós vamos a campo, \
      identificamos desde a entrada de energia da concessionária, transformadores e geradores, até os painéis de distribuição e cargas finais, entregando o desenho técnico totalmente atualizado.',
      icone: '🗺️',
      expandido: false
    },
    
  ];

  alternarServico(servico: Servico) {

    if (this.servicoAberto === servico) {
      this.servicoAberto = null;
      return;
    }

    this.servicoAberto = servico;

  }

  @HostListener('document:click', ['$event'])
  fecharAoClicarFora(event: Event) {

    const elementoClicado = event.target as HTMLElement;

    const clicouNoCard =
      elementoClicado.closest('.card-servico');

    if (!clicouNoCard) {
      this.servicoAberto = null;
    }

  }

}