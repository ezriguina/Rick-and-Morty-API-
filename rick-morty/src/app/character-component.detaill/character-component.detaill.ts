import { Component, input,InputSignal } from '@angular/core';
import { Character } from '../model/character';
@Component({
  selector: 'app-character-component.detaill',
  imports: [],
  templateUrl: './character-component.detaill.html',
  styleUrl: './character-component.detaill.css',
})
export class CharacterComponentDetaill {
public id:InputSignal<number> = input.required<number>();
}
