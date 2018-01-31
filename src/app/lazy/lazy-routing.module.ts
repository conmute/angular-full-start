import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LazyComponent } from './lazy/lazy.component';

const lazyRoutes: Routes = [
  { path: '', component: LazyComponent, children: [
    { path: 'nested', component: LazyComponent }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(lazyRoutes)
  ],
  exports: [RouterModule]
})
export class LazyRoutingModule {

}
