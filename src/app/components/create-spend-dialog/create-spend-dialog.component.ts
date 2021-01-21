import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoriesList, SpendersList } from '../../models/data.model';

@Component({
    selector: 'app-create-spend-dialog',
    templateUrl: './create-spend-dialog.component.html',
    styleUrls: [ './create-spend-dialog.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateSpendDialogComponent implements OnInit {
    spendersList = SpendersList;
    categoriesList = CategoriesList;

    value = 123;

    constructor() {
    }

    ngOnInit(): void {
    }

}
