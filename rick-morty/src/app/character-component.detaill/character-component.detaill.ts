import { Component, input,InputSignal } from '@angular/core';

@Component({
  selector: 'app-character-component.detaill',
  imports: [],
  templateUrl: './character-component.detaill.html',
  styleUrl: './character-component.detaill.css',
})
export class CharacterComponentDetaill {
public id:InputSignal<number> = input.required<number>();
}
