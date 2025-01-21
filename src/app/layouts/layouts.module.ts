import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { RailComponent } from './rail/rail.component';
import { BannerComponent } from './banner/banner.component';
import { ComponentItemComponent } from '../component-item/component-item.component';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    GridComponent,
    RailComponent,
    BannerComponent,
    ComponentItemComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    GridComponent,
    RailComponent,
    BannerComponent,
  ]
})
export class LayoutsModule { }
