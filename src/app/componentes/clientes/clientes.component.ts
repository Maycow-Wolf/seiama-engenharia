import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {

  listaClientes: Cliente[] = [
    {
      nome: 'VIVO',
      logo: 'assets/clientes/vivo.png'
    },
    {
      nome: 'TIM',
      logo: 'assets/clientes/tim.png'
    },
    {
      nome: 'CASSOL',
      logo: 'assets/clientes/cassol.png'
    },
    {
      nome: 'ABILITY',
      logo: 'assets/clientes/ability.png'
    },
    {
      nome: 'AIRSYS',
      logo: 'assets/clientes/airsys.png'
    },
    {
      nome: 'ARTECHE',
      logo: 'assets/clientes/arteche.png'
    },
    {
      nome: 'LUCY',
      logo: 'assets/clientes/lucy.jpg'
    },
    {
      nome: 'LEOGAP',
      logo: 'assets/clientes/leogap.jpg'
    },
    {
      nome: 'TELWORKS',
      logo: 'assets/clientes/telworks.png'
    },
    {
      nome: 'TSEA',
      logo: 'assets/clientes/tsea.png'
    },

  ]
}
