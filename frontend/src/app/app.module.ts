import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClassListComponent } from './class-list/class-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    NoopAnimationsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ClassListComponent,
    ModalComponent,
    ConfirmComponent
  ],
  exports: [],
  providers: [
    MatDatepickerModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
