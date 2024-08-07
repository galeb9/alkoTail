import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.view.html',
  styleUrl: './details.view.css',
})
export class DetailsView implements OnInit {
  @Input()
  id: string;
  isLoading: boolean = false;

  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  cocktail: any;
  wiki: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cocktailService
      .getCocktailById(this.id)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data) => {
        this.cocktail = data;
      });
  }

  goBack() {
    this.location.back();
  }

  // valueAscOrder = (
  //   a: KeyValue<string, string>,
  //   b: KeyValue<string, string>
  // ): number => {
  //   return a.key.localeCompare(b.key);
  // };
}
