import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionarPage } from './estacionar.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionarPageRoutingModule {}
