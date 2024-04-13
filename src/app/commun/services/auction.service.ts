import { Injectable } from '@angular/core';
import { Bidder } from "../models/Bidder";
import { Winner } from "../models/Winner";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor() { }

  // rajouter un type Bidders et un type retour
  calculateAuctionWinner(bidders: Bidder[], reservePrice: number): Winner {
    let winningBidder: string = '';
    let winningBidPrice: number = 0;

    bidders.forEach((bidder: Bidder) => {
      if (bidder.bids.length > 0) {
        const maxBid : number = Math.max(...bidder.bids);
        if (maxBid >= reservePrice && maxBid > winningBidPrice) {
          winningBidder = bidder.name;
          winningBidPrice = maxBid;
        }
      }
    });

    return { winner: winningBidder, winningPrice: winningBidPrice}
  }
}
