import { Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { DetailsView } from './views/details/details.view';
import { DrinksView } from './views/drinks/drinks.view';
import { IngredientsView } from './views/ingredients/ingredients.view';

export const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'drinks/:alcohol', component: DrinksView },
  { path: 'drinks/:alcohol/details/:id', component: DetailsView },
  { path: 'ingredients', component: IngredientsView },
];
