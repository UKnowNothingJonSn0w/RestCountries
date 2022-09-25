import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RegionsComponent } from './regions/regions.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatGridListModule],
  declarations: [AppComponent, HelloComponent, RegionsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
