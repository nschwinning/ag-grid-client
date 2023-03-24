import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-under',
  template: ` <span style="color:red;">Under:</span> {{ value }}`,
  styles: [],
})
export class UnderComponent implements OnInit, ICellRendererAngularComp {
  value: any;

  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {}
}
