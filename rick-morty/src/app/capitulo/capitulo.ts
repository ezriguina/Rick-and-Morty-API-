import { Component, signal, Signal } from '@angular/core';
import { RickMorty } from '../service/rick-morty';
//import { Capitulo } from '../model/capitulo';
import { Capituloo } from '../model/capitulo';
import { RouterOutlet,RouterLink,RouterModule } from '@angular/router';
@Component({
  selector: 'app-capitulo',
  imports: [RouterOutlet,RouterLink,RouterModule],
  templateUrl: './capitulo.html',
  styleUrl: './capitulo.css',
})
export class Capitulo {
  public foto = signal("src/assets/img/rm.png");
 public capitulos : Signal<Capituloo[]>;
 constructor (RICK_SERVICE : RickMorty ) {
  this.capitulos=RICK_SERVICE.capitulo;

 }
}
