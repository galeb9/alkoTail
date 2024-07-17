import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule, KeyValue } from '@angular/common';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.view.html',
  styleUrl: './details.view.css'
})
export class DetailsView implements OnInit{
  @Input()
  id: string;
  isLoading: boolean = false;

  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  cocktail: any;
  wiki : any;

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.cocktailService.getCocktailById(this.id)
        .pipe(
          finalize(() => {
            // Your finally logic here
            this.isLoading = false
          })
        )
        .subscribe(data => {
        this.cocktail = data;
        this.getWiki(data.name);
      });
  }

  getWiki(searchString: string) {
    this.cocktailService.getWikiData(searchString).subscribe(data => {
      if (data) {
        this.wiki = data;
      } else {
        this.wiki = {};
      }
    });
  }

  goBack() {
    this.location.back();
  }

  valueAscOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): number => {
    return a.key.localeCompare(b.key);
  }
}
