import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSpendDialogComponent } from './create-spend-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [ CreateSpendDialogComponent ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule
    ],
    exports: [ CreateSpendDialogComponent ]
})
export class CreateSpendDialogModule {
}
