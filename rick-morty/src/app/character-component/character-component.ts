import { Component,signal,Signal,WritableSignal } from '@angular/core';
import { Character } from '../model/character';
import { RouterOutlet } from '@angular/router';
import { RickMorty } from '../service/rick-morty';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-character-component',
  imports: [RouterOutlet,RouterLink ,FormsModule ],
  templateUrl: './character-component.html',
  styleUrl: './character-component.css',
})
export class CharacterComponent {
public characters :Signal<Character[]>;
protected title ="LIST CHARACTERS RICK AND MORTY " ;
public searchParams: WritableSignal<string>;

alive:Signal<string> = signal("img/green.png");
died : Signal <string > =signal("img/red.png") ;
rm :Signal <string> = signal("img/rm.png");

constructor( public RickMorty_service : RickMorty  ){
  //this.characters=this.RickMorty_service.get_character();
  this.characters=RickMorty_service.character;
  this.searchParams=signal("");
}
retrieveSearch() {
    let params: string[] = this.searchParams();
    this.RickMorty_service.retrieveImageSearch(params);
  }
  clearForm() {
    this.searchParams.set("");
  }
}

