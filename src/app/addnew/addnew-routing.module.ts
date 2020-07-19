import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewPage } from './addnew.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewPageRoutingModule {}
