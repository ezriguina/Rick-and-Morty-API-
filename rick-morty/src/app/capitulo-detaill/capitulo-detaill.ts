import { Component ,input,InputSignal, signal, Signal, WritableSignal} from '@angular/core';
import { Capituloo } from '../model/capitulo';
import { RouterOutlet } from '@angular/router';
import { RickMorty } from '../service/rick-morty';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-capitulo-detaill',
  imports: [RouterOutlet],
  templateUrl: './capitulo-detaill.html',
  styleUrl: './capitulo-detaill.css',
})
export class CapituloDetaill {
  //public id:InputSignal<number> = input.required<number>();
  capitulo :WritableSignal<Capituloo> =  signal(new Capituloo()); 
  
  constructor (private rick_morty_api : RickMorty , routa:ActivatedRoute){
    routa.params.subscribe(params=> {
      const id =Number(params['id']);
      
    this.rick_morty_api.get_capitulo_by_id(id).subscribe(data=>{
      this.capitulo.set(data);
    });
    });
  }
  
}
