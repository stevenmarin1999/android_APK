import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiketePage } from './tikete.page';

const routes: Routes = [
  {
    path: '',
    component: TiketePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiketePageRoutingModule {}
