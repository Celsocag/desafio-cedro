import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgModule } from "@angular/core";

import { Tela1Component } from "./tela1/tela1.component";
import { HomeRoutingModule } from "./home-routing.module";
import { Tela2Component } from "./tela1/tela2/tela2.component";
import { Tela4Component } from './tela1/tela4/tela4.component';
import { Tela3Component } from './tela1/tela3/tela3.component';


@NgModule({
  declarations: [
   Tela1Component,
   Tela2Component,
   Tela3Component,
   Tela4Component,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [ ],
})
export class HomeModule {}
