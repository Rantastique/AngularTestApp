import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class DataTableModule { }
