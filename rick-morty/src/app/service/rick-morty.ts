import { Injectable ,signal,Signal,WritableSignal} from '@angular/core';

import { Capitulo } from '../model/capitulo';
import { Character } from '../model/character';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class RickMorty {
  public readonly API:string ="https://rickandmortyapi.com/api/";
  public readonly API_character:string = "https://rickandmortyapi.com/api/character" ;
  public readonly API_capitulo : string ="https://rickandmortyapi.com/api/episode" ;

  public _Character:WritableSignal <Character[]>;
  public character: Signal <Character[]>;

  constructor(private _http:HttpClient){
    this._Character= signal([]);
    this.character=this._Character.asReadonly();
  }

  public get_character () {
    this._http.get(this.API_character)
  }
  //character:WritableSignal<Character[]>;
}
