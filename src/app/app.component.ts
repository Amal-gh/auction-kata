import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuctionKataComponent } from './auctions/auction-kata/auction-kata.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuctionKataComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Kata Auction';
}
