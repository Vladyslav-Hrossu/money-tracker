import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, Self, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Spend, SpendCategoriesTitles, Spenders, SpendersNames } from '../../models/data.model';
import { SpendsService } from '../../services/spends.service';
import { FormControl } from '@angular/forms';
import { DestroyService } from '../../services/destroy.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-spends-table',
    templateUrl: './spends-table.component.html',
    styleUrls: [ './spends-table.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ DestroyService ]
})
export class SpendsTableComponent implements OnInit, AfterViewInit {
    displayedColumns: (keyof Spend)[] = [ 'sum', 'description', 'category', 'spender', 'date' ];
    dataSource: MatTableDataSource<Spend>;
    filterField = new FormControl('');
    data: Spend[] = [];

    spenders = SpendersNames;
    spendersList = Spenders;
    categories = SpendCategoriesTitles;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private spendsService: SpendsService,
        @Self() private destroy$: DestroyService
    ) {
    }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<Spend>();

        this.spendsService.spendsData$
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
                this.data = data;

                this.dataSource.data = this.data;
            });

        this.filterField.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => this.applyFilter(value));
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filter: string): void {
        this.dataSource.filter = filter.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    getSpends(spenderName: Spenders): number {
        return this.data.filter(({ spender }) => spender === spenderName).reduce((acc, {sum}) => acc + sum, 0);
    }
}
