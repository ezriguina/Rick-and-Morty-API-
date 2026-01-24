import { Routes } from '@angular/router';
import { CharacterComponent } from './character-component/character-component';
import { CharacterComponentDetaill } from './character-component.detaill/character-component.detaill';
import { Capitulo } from './capitulo/capitulo';
import { CapituloDetaill } from './capitulo-detaill/capitulo-detaill';
import { App } from './app';


export const routes: Routes = [
    {path: 'index' ,component:App},
    {path: 'character',component:CharacterComponent},
    {path: 'character/:id',component:CharacterComponentDetaill},
    {path: 'capitulo',component:Capitulo},
    {path: 'capitulo/:id',component:CapituloDetaill}
];
