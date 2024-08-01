import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

// import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.development';

import { Observable } from 'rxjs';
import { Cocktail } from '../../types/Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  cocktail: any;

  getCocktailById(id: string): Observable<any> {
    return this.http.get(`${environment.backendBaseUrl}/cocktail/${id}`);
  }

  getCocktailByAlcohol(alcohol: string) {
    return this.http.get(`${environment.backendBaseUrl}/cocktails/${alcohol}`);
  }

  getAllAlcohol() {
    return this.http.get(`${environment.backendBaseUrl}/alcohol`);
  }
  getIngridients() {
    return this.http.get(`${environment.backendBaseUrl}/ingredients`);
  }
}
