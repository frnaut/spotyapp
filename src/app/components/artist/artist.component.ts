import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTrack: any [];
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private spotifyService: SpotifyService,
               private location: Location  ) {

    this.loading = true;
    this.activatedRoute.params.subscribe( params => {
      // console.log(params[ 'id' ]);

      this.dataArtista( params[ 'id' ] );
      this.topTracks( params[ 'id' ] );

    } );
  }

    back() {
      this.location.back();
    }

    dataArtista( id: string ) {
      this.spotifyService.getArtista( id )
      .subscribe( ( data: any ) => {
        this.artist = data;
        // console.log(data);
        this.loading = false;
      } );
    }

    topTracks( id: string ) {
      this.spotifyService.topTrack( id )
          .subscribe( ( data: any [] ) => {
            this.topTrack = data['tracks'];
            console.log(this.topTrack);
            this.loading = false;
          } );
    }


}
