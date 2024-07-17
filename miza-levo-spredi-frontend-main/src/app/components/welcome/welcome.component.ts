import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  mottos = [
    "An app where you avoid boring drinking 4 life",
    "Sip Smartly, Live Lively",
    "Shake Up Your Drink Routine",
    "Discover Your Next Favorite Cocktail",
    "Every Drink, a New Adventure",
    "Mix, Sip, Enjoy",
    "Raise the Bar on Happy Hour",
    "Craft Your Perfect Cocktail",
    "Find Flavor, Find Fun",
    "Cocktail Inspiration at Your Fingertips",
    "Cheers to New Discoveries"
  ];
  motto: string = ""
  
  giveRandomMoto () {
    return this.mottos[Math.floor(Math.random() * this.mottos.length)];
  }
  
  ngOnInit(): void {
    this.motto = this.giveRandomMoto()
  }
}
