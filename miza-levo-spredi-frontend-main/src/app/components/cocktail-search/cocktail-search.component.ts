import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cocktail-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cocktail-search.component.html',
  styleUrl: './cocktail-search.component.css'
})
export class CocktailSearchComponent {
  alcoholList: string[] = [
    'Vodka',
    'Rum',
    'Gin',
    'Whiskey',
    'Tequila',
    'Brandy',
    'Bourbon',
    'Scotch',
    'Rye',
    'Cognac',
    'Absinthe',
    'Campari',
    'Amaretto',
    'Baileys Irish Cream',
    'Kahlua',
    'Grand Marnier',
    'Cointreau',
    'Triple Sec',
    'Vermouth',
    'Sambuca',
    'Pisco',
    'Chartreuse',
    'Jägermeister',
    'Schnapps',
    'Soju',
    'Mezcal',
    'Sake',
    'Aquavit',
    'Calvados',
    'Grappa',
    'Ouzo',
    'Pernod',
    'Rakı',
    'Sherry',
    'Port Wine',
    'Madeira',
    'Champagne',
    'Prosecco',
    'Sparkling Wine',
    'Liqueurs',
    'Moonshine'
  ];
}
