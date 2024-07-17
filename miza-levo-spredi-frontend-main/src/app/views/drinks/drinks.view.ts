import { Component } from '@angular/core';
import {CocktailService} from "../../services/cocktail.service";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './drinks.view.html',
  styleUrl: './drinks.view.css'
})
export class DrinksView {
  drink:any = "";
  drinks: any = [];
  isLoading: boolean = false;

  constructor(private cocktailService: CocktailService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.param =  window.location.href.split("/").pop()
    this.isLoading = true
    this.drink = this.route.snapshot.params['alcohol']
    this.cocktailService.getCocktails(this.drink)
      .pipe(
        finalize(() => {
          // Your finally logic here
          this.isLoading = false
        })
      )
      .subscribe(
      (data:any) => {
        this.drinks = data;
      },
      (error: any) => {
        console.log(error)
      }
    );

  }
}
