import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rick-morty');
  public background:Signal<string> =signal("img/rick.jpg");
  public rick_foto :Signal<string> =signal("img/rm.jpg");
}
