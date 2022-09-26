import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [PagesComponent, HomeComponent],

  imports: [ModalModule.forRoot(),PagesRoutingModule, BrowserModule, HttpClientModule],

  providers: [],
  bootstrap: [PagesComponent],
})
export class PagesModule {}
