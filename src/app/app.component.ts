import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  albums: Observable<any[]>;
  title = "Say Hello to Chans's Lil Friend";
  constructor(db: AngularFireDatabase) {
    this.albums = db.list('albums');
    }
  }

