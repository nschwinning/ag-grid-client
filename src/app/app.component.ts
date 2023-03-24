import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-enterprise';
import { Observable } from 'rxjs';
import { MyCellComponent, MyCellParams } from './my-cell/my-cell.component';
import { OverComponent } from './over/over.component';
import { UnderComponent } from './under/under.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rowData$!: Observable<any[]>;

  colDefs: ColDef[] = [
    {
      field: 'name',
      cellRenderer: MyCellComponent,
      cellRendererParams: {
        buttonText: 'Name',
      } as MyCellParams,
    },
    {
      field: 'age',
      aggFunc: 'avg',
      cellRendererSelector: (params: ICellRendererParams) => {
        if (params.value < 25) {
          return { component: UnderComponent };
        } else return { component: OverComponent };
      },
    },
    { field: 'weight', aggFunc: 'avg' },
    { field: 'height', aggFunc: 'avg' },
    { field: 'noc' },
    { field: 'year' },
    { field: 'city' },
    { field: 'sport' },
    { field: 'medal' },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    enableRowGroup: true,
    enablePivot: true,
    filterParams: {
      applyMiniFilterWhileTyping: true,
    },
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>('http://localhost:8086/api/athletes');
  }
}
