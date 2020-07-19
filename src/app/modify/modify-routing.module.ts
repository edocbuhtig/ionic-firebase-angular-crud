import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyPage } from './modify.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyPageRoutingModule {}
