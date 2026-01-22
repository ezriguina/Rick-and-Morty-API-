import { Component ,input,InputSignal} from '@angular/core';

@Component({
  selector: 'app-capitulo-detaill',
  imports: [],
  templateUrl: './capitulo-detaill.html',
  styleUrl: './capitulo-detaill.css',
})
export class CapituloDetaill {
  public id:InputSignal<number> = input.required<number>();
  
}
