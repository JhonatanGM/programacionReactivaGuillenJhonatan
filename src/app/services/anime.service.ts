import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Anime } from '../pages/models/character';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }


  public searchAnime(searchAnime: string): Observable<Anime[]>{
    return this.http.get('https://rickandmortyapi.com/api/character/?',{
      params:{
        name: searchAnime
      }
    }).pipe(
      map((value:any) => value)
    );
  }
  public listado(): Observable<Anime[]>{
    return this.http.get<Anime[]>('https://rickandmortyapi.com/api/character/');
  }
}
