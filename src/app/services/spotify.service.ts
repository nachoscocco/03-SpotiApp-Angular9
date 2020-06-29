import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service ATR!!')
   }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDLfLUKzT3CaXVJ3hzGuVx3mrnI1r6y-sVeST2m-RMItc2nd9006d4tmnx4ayXaevr0xuO_ew8kx9nREcA'
    });
    
    return this.http.get(url,{headers});
  }


   getNewReleases(){

   /*  const headers =new HttpHeaders({
      'Authorization': 'Bearer BQCa70ENHQeJY_-5hgYr9ev4KN6QN2Pt4YPKtZ8jDHVNoelUjuWI3rwgi8qnREWLcZIgF0IrKdsKzfpaB5w'
    }); */ 

     return this.getQuery('browse/new-releases?limit=20')
       .pipe(map((data) =>  data["albums"].items ));

   /*   this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
       .pipe(map( (data: any) => {
         return data["albums"].items;
       })); */

   }

   getGrupoArtistas( termino: string) {
     /* const headers = new HttpHeaders({
       'Authorization': 'Bearer BQCa70ENHQeJY_-5hgYr9ev4KN6QN2Pt4YPKtZ8jDHVNoelUjuWI3rwgi8qnREWLcZIgF0IrKdsKzfpaB5w'
     }); */
     return this.getQuery(`search?q=${ termino }&type=artist&market=US&limit=15`)
       .pipe(map(data => data["artists"].items
       ))  ;

    /*  this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=US&limit=15`, { headers })
        .pipe(map(data => data["artists"].items
        ))   */

   }

   getArtista(idArtista: string) {
     return this.getQuery(`artists/${idArtista}`);
       /* .pipe(map(data => data["artists"].items
       )) */
   }

}


