import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { finalize } from 'rxjs/operators';
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component';

@Component({
  selector: 'app-cocktail-search',
  standalone: true,
  imports: [CommonModule, RouterLink, IngredientsListComponent],
  templateUrl: './cocktail-search.component.html',
  styleUrl: './cocktail-search.component.css',
})
export class CocktailSearchComponent {
  alcoholList: any;
  catchphrase: string = '';
  catchphrases = [
    'Time for a Booze Check! See what you’ve got and get mixing!',
    'Home Bar Inventory Time! What’s in your stash? Let’s find out!',
    'Ready for a Drink Discovery? Peek into your liquor cabinet and see what you can create!',
    'Booze Patrol! Check your home bar and get ready to mix up something special!',
    'Sip & Scan! What’s hiding in your liquor cabinet? Time to find out!',
    'Liquor Loot Check! Dive into your stash and see what fun cocktails await!',
  ];

  randomizeCatchphrase() {
    return this.catchphrases[
      Math.floor(Math.random() * this.catchphrases.length)
    ];
  }

  constructor(private cocktailService: CocktailService) {}
  // use typescript type for list
  ngOnInit(): void {
    this.catchphrase = this.randomizeCatchphrase();

    this.cocktailService
      .getAllAlcohol()
      .pipe(
        finalize(() => {
          // this.isLoading = false;
        })
      )
      .subscribe((data) => {
        this.alcoholList = data;
      });
  }
}
