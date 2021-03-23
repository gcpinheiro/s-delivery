import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { DashboardPedidosComponent } from './pages/dashboard-pedidos/dashboard-pedidos.component';
import { AvaliacaoComponent } from './pages/avaliacao/avaliacao.component';

const routes: Routes = [
   { 
	path: '', 
	component: DashboardComponent
   },
   { 
  path: 'login', 
  component: HomeComponent
   }, 

   { 
  	path: 'dashboard', 
  	component: DashboardComponent 
   },
  
  {  
   path: 'pedidos', 
  component: DashboardPedidosComponent
   },

   { 
   path: 'avaliacoes', 
  component: AvaliacaoComponent
   },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
