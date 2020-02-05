import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { RouterModule } from '@angular/router';

// http
import { HttpClientModule } from '@angular/common/http';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// rutas
import { ROUTES } from './app.routes';

// pipes
import { NoimagesPipe } from './pipes/noimages.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagesPipe,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
