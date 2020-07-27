import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
//import { BookListService } from './book-list.service';

@NgModule({
  declarations: [
    AppComponent,
    BookEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
