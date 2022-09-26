import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { MatGridListModule } from '@angular/material/grid-list';
import { AfricaComponent } from './africa/africa.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [PagesComponent, HomeComponent, AfricaComponent],

  imports: [
    ModalModule.forRoot(),
    PagesRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    NgxDatatableModule,
  ],

  providers: [],
  bootstrap: [PagesComponent],
})
export class PagesModule {}
