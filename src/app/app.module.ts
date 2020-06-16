
//MODULOS
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule } from "@angular/router";

  import{ HttpClientModule } from '@angular/common/http';

//COMPONENTES
  import { AppComponent } from './app.component';
  import { HomeComponent } from './components/home/home.component';
  import { ArtistaComponent } from './components/artista/artista.component';
  import { SearchComponent } from './components/search/search.component';
  import { NavbarComponent } from './components/shared/navbar/navbar.component';

//RUTAS
  import { ROUTES } from "./app.routes";

//SERVICIOS
  import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES ,{useHash:true} )
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
