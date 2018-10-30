import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]

})


export class MarketplaceComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
    console.log(this.router.url);

  }

  goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };
}