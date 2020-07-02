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
  error:boolean ;
  mensajeError:string = '';

  constructor(private spotiapp: SpotifyService ) {

      this.loading = true;
      this.error   = false;
      this.spotiapp.getNewReleases()
         .subscribe ((data: any)   =>{
          console.log(data);
           this.nuevasCanciones =  data;
           this.loading =false;
        }, (errorService)=>{        //salida negativa del subscribe 

          this.error = true;
          this.loading = false ;
          this.mensajeError= errorService.error.error.message;

        }
        
        
        ); 
      

   }

 

}
