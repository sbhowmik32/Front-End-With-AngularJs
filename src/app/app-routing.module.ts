import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonorComponent } from './donor/donor.component';

const routes: Routes = [
  {path: 'donor', component:DonorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
