import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Spend } from '../models/data.model';

@Injectable({
    providedIn: 'root'
})
export class SpendsService {
    spendsData$ = this.firestore.collection('items')
        .valueChanges()
        .pipe(
            filter(Boolean)
        ) as Observable<Spend[]>;

    constructor(private firestore: AngularFirestore) {
    }
}
