import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('funciona');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBU2K8GouLexevjFhvkPV8zGIOs8OLwfuYbFWMIspgSysAXLmNmM28Ht0-T1BfFyA5V_YuxvU1FSbjVs_g'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {


    return this.getQuery('browse/new-releases');
  }

  getArtist( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
                .pipe( map( (data: any) => {
                  return data.artists.items;
            } ) );

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id} `)
                .pipe( artist => {
                    return artist;
                } );

  }

  topTrack( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe ( topTrack => {
                  return topTrack;
                } );
  }

}
