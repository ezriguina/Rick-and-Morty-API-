import { Routes } from '@angular/router';
import { CharacterComponent } from './character-component/character-component';
import { CharacterComponentDetaill } from './character-component.detaill/character-component.detaill';
import { Capitulo } from './capitulo/capitulo';
import { CapituloDetaill } from './capitulo-detaill/capitulo-detaill';

export const routes: Routes = [
    {path: 'character',component:character_comp},
    {path: 'character/:id',component:character_comp_detaill},
    {path: 'capitulo',component:capitulo_component},
    {path: 'character/:id',component:capitulo_component_detaill},
    {path: '',component:PageNotFound},
];
