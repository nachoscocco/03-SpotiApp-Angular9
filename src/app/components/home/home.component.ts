import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones:any[] = [];
  loading: boolean;

  constructor(private spotiapp: SpotifyService ) {

      this.loading =true;
      this.spotiapp.getNewReleases()
         .subscribe ((data: any)   =>{
          console.log(data);
           this.nuevasCanciones =  data;
           this.loading =false;
        }); 
      

   }

 

}
