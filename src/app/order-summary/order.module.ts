import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ImgComponent } from './imagenes/img.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { BotonesComponent } from './botones/botones.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    ImgComponent,
    ContenidoComponent,
    BotonesComponent
  ],
  exports: [
    MainComponent
  ]
})
export class OrderModule { }
