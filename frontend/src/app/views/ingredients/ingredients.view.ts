import { Component } from '@angular/core';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { CocktailService } from '../../services/cocktail.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [IngredientsListComponent],
  templateUrl: './ingredients.view.html',
  styleUrl: './ingredients.view.css',
})
export class IngredientsView {
  ingredients: string[] = [];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService
      .getIngridients()
      .pipe(finalize(() => {}))
      .subscribe(
        (data: any) => {
          this.ingredients = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
