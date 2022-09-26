import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css'],
})
export class AfricaComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  public africa = [];
  public loading = true;

  constructor() {}

  ngOnInit(): void {
    this.loadAfrica();
  }
  loadAfrica() {
    //this.ShipsService.Ships().subscribe((response) => {
    // console.log(response);
    // this.ships = response;
    // });
  }
}
