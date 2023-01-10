import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Observable} from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from '../models/character';


@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css']
})
export class AnimePageComponent implements OnInit, OnDestroy {
  animes?:any =[];
  msg: string = ' '

  public serachCharacter = new FormControl('');
  public form = new FormGroup({
    search: this.serachCharacter,
  })

  constructor(private _service: AnimeService) {
      this.serachCharacter.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((value:any)=>{
          this.animes =  this._service.searchAnime(value).subscribe();
          console.log(this._service.searchAnime(value))
      });

  }

  ngOnInit(): void {
   this._service.listado().subscribe((valores:Anime[])=>{
      this.animes = valores;
    });

  }

  ngOnDestroy(): void {
    throw new Error('Not implemented');
  }
}
