import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newReleases: any [] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService,
               private router: Router ) {
    this.loading = true;

    this.spotifyService.getNewReleases()
        .subscribe( (data: any) => {
          this.newReleases = data ;
          // console.log( data );
          this.loading = false ;
        });
   }

  verArtista( item: any ) {
    let artistId ;
    artistId = item.artists[0].id;
    // console.log( artistId );

    this.router.navigate([ 'artist', artistId ]);
  }

}
