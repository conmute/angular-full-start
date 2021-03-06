import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
  ],
  declarations: [
    LazyComponent,
  ],
  exports: [
    LazyRoutingModule,
  ],
})
export class LazyModule { }
