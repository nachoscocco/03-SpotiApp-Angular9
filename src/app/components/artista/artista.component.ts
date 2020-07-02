import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {
   
  loading: boolean;
  artista: any={};
  tracks: any []= [];

  constructor( private rutaActiva : ActivatedRoute,
               private spotiapp: SpotifyService) { 


    this.loading = true;

    this.rutaActiva.params.subscribe( params=>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);

    });
  }

  getArtista(id:string){
    
    this.spotiapp.getArtista(id)
      .subscribe(artistaObtenido =>{
         /* console.log(artistaObtenido); */
         this.artista = artistaObtenido;
        this.loading = false;
      });
  }
  
  getTopTracks(id:string){

    this.spotiapp.getTopTracks(id)
      .subscribe(topTracks =>{
         console.log(topTracks); 
        this.tracks = topTracks;
      });

  }


}
