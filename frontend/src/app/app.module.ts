import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';

import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
