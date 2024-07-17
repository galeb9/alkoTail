import { Component } from '@angular/core';
import {WelcomeComponent} from "../../components/welcome/welcome.component";
import {CocktailSearchComponent} from "../../components/cocktail-search/cocktail-search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, CocktailSearchComponent],
  templateUrl: './home.view.html',
  styleUrl: './home.view.css'
})
export class HomeView {
}
