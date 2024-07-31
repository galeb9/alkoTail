import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { CocktailService } from './services/cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-fe';
  constructor(private cocktailService: CocktailService) {}

  cocktail: any;
  ngOnInit(): void {

      this.cocktailService.getCocktailById("15300").subscribe(data => {
        this.cocktail = data;
      });
  }
}
