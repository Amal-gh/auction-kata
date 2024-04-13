import { Injectable } from '@angular/core';
import { Bidder } from "../models/Bidder";
import { Winner } from "../models/Winner";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor() { }

  calculateAuctionWinner(bidders: Bidder[], reservePrice: number): Winner {
    let winnerBidder: Winner = {winner: '', winningPrice: 0};

    bidders.forEach((bidder: Bidder) => {
      if (bidder.bids.length > 0) {
        const maxBid : number = Math.max(...bidder.bids);

        if (maxBid >= reservePrice && maxBid > winnerBidder.winningPrice) {
          winnerBidder.winner = bidder.name;
          winnerBidder.winningPrice = maxBid;
        }
      }
    });

    return winnerBidder;
  }
}
