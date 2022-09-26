import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { HomeComponent } from './home/home.component';
import { AfricaComponent } from './africa/africa.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'africa', component: AfricaComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
