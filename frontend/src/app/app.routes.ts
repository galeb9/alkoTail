import { Routes } from '@angular/router';
import {HomeView} from "./views/home/home.view";
import {DetailsView} from "./views/details/details.view";
import {DrinksView} from "./views/drinks/drinks.view";

export const routes: Routes = [
  {path: '', component: HomeView},
  {path: 'drinks/:alcohol', component: DrinksView},
  {path: 'details/:id', component: DetailsView},
];
