import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


export interface PeriodicElement {
  pedido: number;
  nomeCliente: string;
  data: string;
  hora: string;
  valor: string;
  status: string;
  verDetalhes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},
  {pedido: 1, nomeCliente: 'Luis Van Bethoven', data: '02/02/2021', hora: '16:45', valor:' R$55,00', 
    status: 'Novo', verDetalhes: 'Ver detalhes'},                
  

 
];

@Component({
  selector: 'app-dashboard-pedidos',
  templateUrl: './dashboard-pedidos.component.html',
  styleUrls: ['./dashboard-pedidos.component.scss']
})
export class DashboardPedidosComponent {

  displayedColumns: string[] = [

  'pedido', 'nomeCliente', 'data','hora','valor', 'status','verDetalhes'

   ];
  dataSource = ELEMENT_DATA;


  constructor(private breakpointObserver: BreakpointObserver) {}
}
