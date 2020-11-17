import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  exports: [],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
