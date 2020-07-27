import { Component, Input } from '@angular/core';
//import {BookListService} from '../book-list.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './app.bookEntry.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','../app.component.css']
})
export class BookEntryComponent {
  public  bookName = "Art of War";
  public  bookAuthour = "Sun Tzu";
  public  bookStatus = "In";

/****************************************************************************************
 * User the @ Input() to share class properties from Parent (app.component.ts) to Child
 * (book-entry.component.ts) Components. Make sure you import the Input module
 ****************************************************************************************/
  @Input() user;

  //constructor(public BookListService:BookListService){
  //  this.bookStatus=BookListService.book1[3];
  //}

}
