import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { Character } from '../model/character';
import { RickMorty } from '../service/rick-morty';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-character-component.detaill',
  imports: [RouterOutlet,RouterLink  ],
  templateUrl: './character-component.detaill.html',
  styleUrl: './character-component.detaill.css',
})
export class CharacterComponentDetaill {

  character: WritableSignal<Character> = signal(new Character());

  constructor(private rickMortyService: RickMorty , private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      
      this.rickMortyService.get_character_byid(id).subscribe(data => {
        this.character.set(data);
      });
    });
  }
}
