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
  title = 'kata-auction';
  // bidders: Bidder[]= [];
  // result: Winner = {winner: '', winningPrice: 0};
  //
  //
  // constructor(private auctionService: AuctionService) {
  // }
  //
  // onBidderAdded(addedBidder: Bidder) {
  //
  //   console.log("Onadd !!")
  //   // this.bidders.push(bidder);
  //
  //
  //   if (this.bidders.length == 0) {
  //     console.log("vide :");
  //     this.bidders?.push(addedBidder);
  //   } else {
  //     // TODO : refacto
  //     const existingBidder = this.bidders?.find(bidder => bidder.name === addedBidder.name);
  //
  //     if(existingBidder) {
  //       existingBidder.bids.push(Number(addedBidder.bids[0]))
  //     } else {
  //       this.bidders?.push(addedBidder)
  //     }
  //   }
  //
  //   this.bidders= [...this.bidders];
  //   console.log('biders : ', this.bidders);
  // }
  //
  // calculateAuctionWinner(bidders: Bidder[], reservePrice: number) {
  //   console.log(bidders);
  //
  //   this.result =
  //       this.auctionService.calculateAuctionWinner(bidders, reservePrice);
  //   // TODO : vérifier lorsque le price de reserve est égale au prix ou en desosus
  //   console.log('result : ', this.result);
  // }
  //
  // // ngOnInit() {
  // //   const bidders: Bidder[]= [
  // //     { name: 'A', bids: [110, 130] },
  // //     { name: 'B', bids: [] },
  // //     { name: 'C', bids: [125] },
  // //     { name: 'D', bids: [105, 115, 90] },
  // //     { name: 'E', bids: [132, 135, 140] }
  // //   ];
  // //
  // //   const reservePrice: number = 100;
  // //
  // //   const result =
  // //     this.auctionService.calculateAuctionWinner(bidders, reservePrice);
  // //
  // //   console.log('Auction winner : ', result.winner);
  // //   console.log('Auction Winning price : ', result.winningPrice);
  // // }


}
