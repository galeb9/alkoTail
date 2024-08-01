import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  links: any[] = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Ingredients',
      to: '/ingredients',
    },
  ];
}
