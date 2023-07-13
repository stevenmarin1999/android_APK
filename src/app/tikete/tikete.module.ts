import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiketePageRoutingModule } from './tikete-routing.module';

import { TiketePage } from './tikete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiketePageRoutingModule
  ],
  declarations: [TiketePage]
})
export class TiketePageModule {}
