import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [DataTableComponent],
    imports: [
        CommonModule,
        DataTableRoutingModule,
        MatButtonModule
    ]
})
export class DataTableModule { }
