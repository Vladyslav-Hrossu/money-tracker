import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SpendsTableModule } from './components/spends-table/spends-table.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateSpendDialogModule } from './components/create-spend-dialog/create-spend-dialog.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        SpendsTableModule,
        MatButtonModule,
        MatDialogModule,
        CreateSpendDialogModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
