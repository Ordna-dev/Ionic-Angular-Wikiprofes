import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsLoginPage } from './is-login.page';

const routes: Routes = [
  {
    path: '',
    component: IsLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsLoginPageRoutingModule {}
