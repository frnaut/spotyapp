import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any [] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService,
               private router: Router ) {

  }



  buscar( termino: string ) {
      this.spotifyService.getArtist( termino )
                          .subscribe( ( data: any ) => {
                            this.artists = data;
                            console.log( this.artists );
                            if ( this.artists.length === 0 ) {
                              this.loading = true;
                            } else {
                              this.loading = false;

                            }
                          } );

  }

  verArtist( item: any ) {
    let artistId;

    artistId = item.id;
    // console.log( artistId );

    this.router.navigate(['artist', artistId]);

    }

  }

