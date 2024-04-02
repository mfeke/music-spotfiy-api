import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  private api = "https://api.spotify.com/v1/"


  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<any> {
    let accessToken = sessionStorage.getItem('access_token');

    const headers = new HttpHeaders()
      .append('Authorization', 'Bearer ' + accessToken)
      .append('Content-Type', 'application/json');

    return this.http.get<any>(`${this.api}recommendations?seed_artists=&seed_genres=afrobeat&seed_tracks=&limit=20&market=GB`, {headers:headers})

  }

  getRandomPlaylist():Observable<any>{
    let playlistRandom = [
      // '37i9dQZF1EIYR2VE1ihQkA',
      '37i9dQZF1DWWW9iyuOPGds',
      // '37i9dQZF1DX5mILnBJLA26',
      // '37i9dQZF1EIYo65IAzihdA'
      ]
      let playlistId = playlistRandom[Math.floor(Math.random() * playlistRandom.length)]
      let accessToken = sessionStorage.getItem('access_token');

      if(!playlistId){
        console.log("No Playlist Id")

      }
      const headers = new HttpHeaders()
        .append('Authorization', 'Bearer ' + accessToken)
        .append('Content-Type', 'application/json');
      return this.http.get<any>(`${this.api}playlists/${playlistId}`,{headers:headers} )

  }
  agePlaylistTrak(api:string):Observable<any>{
    let accessToken = sessionStorage.getItem('access_token');

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + accessToken)
    .append('Content-Type', 'application/json');
    return this.http.get<any>(`${api}`,{headers:headers} )


  }
  agetNewRelase():Observable<any>{
    let accessToken = sessionStorage.getItem('access_token');

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + accessToken)
    .append('Content-Type', 'application/json');
    return this.http.get<any>(`${this.api}browse/new-releases?offset=0&limit=2`,{headers:headers} )

  }
  agetrelateArtists():Observable<any>{
    let accessToken = sessionStorage.getItem('access_token');
    const id = "3fdFRgy3GmfiWQqeKbmFS8"

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + accessToken)
    .append('Content-Type', 'application/json');
    return this.http.get<any>(`${this.api}artists/${id}/related-artists`,{headers:headers} )

  }
  agetArtist(id:any):Observable<any>{
    let accessToken = sessionStorage.getItem('access_token');
    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + accessToken)
    .append('Content-Type', 'application/json');
    return this.http.get<any>(`${this.api}artists/${id}`,{headers:headers} )

  }
  getPoplurArtist():Observable<any>{
    let accessToken = sessionStorage.getItem('access_token');
    const id = "0JQ5DAnM3wGh0gz1MXnu7R"

    const headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + accessToken)
    .append('Content-Type', 'application/json');
    return this.http.get<any>(`${this.api}playlists/${id}`,{headers:headers} )
  }


}




