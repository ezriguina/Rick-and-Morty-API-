import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet,RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rick-morty');
  public background=signal("img/rick.jpg");
  public rick_foto =signal("img/rm.jpg");
  
}
