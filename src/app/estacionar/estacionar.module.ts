import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionarPageRoutingModule } from './estacionar-routing.module';

import { EstacionarPage } from './estacionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionarPageRoutingModule
  ],
  declarations: [EstacionarPage]
})
export class EstacionarPageModule {}
