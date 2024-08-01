import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.css',
})
export class IngredientsListComponent {
  @Input() list: any[] = [];
  @Input() linkTo: string = '';
}
