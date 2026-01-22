import { Routes } from '@angular/router';
import { CharacterComponent } from './character-component/character-component';
import { CharacterComponentDetaill } from './character-component.detaill/character-component.detaill';
import { Capitulo } from './capitulo/capitulo';
import { CapituloDetaill } from './capitulo-detaill/capitulo-detaill';

export const routes: Routes = [
    {path: 'character',component:CharacterComponent},
    {path: 'character/:id',component:CharacterComponentDetaill},
    {path: 'capitulo',component:Capitulo},
    {path: 'character/:id',component:CapituloDetaill}
];
