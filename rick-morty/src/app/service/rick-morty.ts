import { Injectable ,signal,Signal,WritableSignal} from '@angular/core';

import { Capitulo } from '../model/capitulo';
import { Character } from '../model/character';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';


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
    this.get_character();
    
  }

  public get_character () {
    this._http.get(this.API_character).subscribe({
      next : (value:any ) => {
        let characters : Character[] = [] ;
        value.hits.forEach((elmnt :any )=>{
        let character : Character = new Character();
        character.id = elmnt.id ;
        character.name=elmnt.name ;
        character.status=elmnt.status;
        character.species=elmnt.species; 
        character.type=elmnt.type ;
        character.gender=elmnt.gender ;
        character.image=elmnt.image; 
        character.created =elmnt.created; 

        characters.push(character) ;

        this._Character.set(characters);
        });
      },
      error : (error:any) => {},
      complete : () => {}
    }) ;
  }
  //character:WritableSignal<Character[]>;
}
