import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendsTableComponent } from './spends-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ SpendsTableComponent ],
    imports: [
        CommonModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule
    ],
    exports: [
        SpendsTableComponent
    ]
})
export class SpendsTableModule {
}
