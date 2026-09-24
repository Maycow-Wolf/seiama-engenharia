import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { HeroComponent } from '../../componentes/hero/hero.component';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { ServicosComponent } from '../../componentes/servicos/servicos.component';
import { SobreComponent } from '../../componentes/sobre/sobre.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { WhatsappFlutuanteComponent } from '../../componentes/whatsapp-flutuante/whatsapp-flutuante.component';
import { EquipamentosComponent } from '../../componentes/equipamentos/equipamentos.component';
import { ClientesComponent } from '../../componentes/clientes/clientes.component';
import { EmergencialComponent } from "../../componentes/emergencial/emergencial.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CabecalhoComponent,
    HeroComponent,
    RodapeComponent,
    ServicosComponent,
    SobreComponent,
    ContatoComponent,
    WhatsappFlutuanteComponent,
    EquipamentosComponent,
    ClientesComponent,
    EmergencialComponent
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
