import { Tela1Component } from './tela1/tela1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tela4Component } from './tela1/tela4/tela4.component';
import { Tela3Component } from './tela1/tela3/tela3.component';




const routes: Routes = [
  {
    path: '',
    component: Tela1Component
  },
  {
    path: 'tela3',
    component: Tela3Component
  },{
    path: 'tela4',
    component: Tela4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
