import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Bidder} from "./commun/models/Bidder";
import {AuctionService} from "./commun/services/auction.service";
import {AuctionFormComponent} from "./auctions/auction-form/auction-form.component";
import {AuctionListComponent} from "./auctions/auction-list/auction-list.component";
import {NgIf} from "@angular/common";
import {Winner} from "./commun/models/Winner";
import {AuctionKataComponent} from "./auctions/auction-kata/auction-kata.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuctionFormComponent, AuctionListComponent, NgIf, AuctionKataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
