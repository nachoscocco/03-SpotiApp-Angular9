import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service ATR!!')
   }

   getNewReleases(){

    const headers =new HttpHeaders({
      'Authorization': 'Bearer BQCjGnNVWrMrZlA5Z6goHGNpbAoTbWAQi_O9Z7gOEjFY7Q6jodQ3up3B2wISJjXcY4QR0xhzJYGTG6ya9Mc'
    })
     this.http.get('https://api.spotify.com/v1/browse/new-releases',  { headers })
     .subscribe( data=>{
       console.log(data);
     });
   }


}


