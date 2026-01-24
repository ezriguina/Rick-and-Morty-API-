import { Component,signal,Signal,WritableSignal } from '@angular/core';
import { Character } from '../model/character';
import { RouterOutlet } from '@angular/router';
import { RickMorty } from '../service/rick-morty';

@Component({
  selector: 'app-character-component',
  imports: [],
  templateUrl: './character-component.html',
  styleUrl: './character-component.css',
})
export class CharacterComponent {
public characters :Signal<Character[]>;
protected title ="LIST CHARACTERS RICK AND MORTY " ;

constructor( public RickMorty_service : RickMorty  ){
  //this.characters=this.RickMorty_service.get_character();
  this.characters=RickMorty_service.character;
}

}

