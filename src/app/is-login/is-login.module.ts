import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsLoginPageRoutingModule } from './is-login-routing.module';

import { IsLoginPage } from './is-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsLoginPageRoutingModule
  ],
  declarations: [IsLoginPage]
})
export class IsLoginPageModule {}
