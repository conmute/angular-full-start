import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  exports: [
    CoreRoutingModule,
    HeaderComponent,
  ],
})
export class CoreModule { }
