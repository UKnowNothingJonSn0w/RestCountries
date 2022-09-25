import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegionsComponent } from './regions/regions.component';

@NgModule({
  declarations: [RegionsComponent],
  imports: [
    RouterModule.forRoot([{ path: 'regions', component: RegionsComponent }]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
