import { Component } from '@angular/core';
import { Bidder } from '../../commun/models/Bidder';
import { Winner } from '../../commun/models/Winner';
import { AuctionService } from '../../commun/services/auction.service';
import { AuctionFormComponent } from '../auction-form/auction-form.component';
import { AuctionListComponent } from '../auction-list/auction-list.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auction-kata',
  standalone: true,
  imports: [AuctionFormComponent, AuctionListComponent, NgIf, FormsModule],
  templateUrl: './auction-kata.component.html',
  styleUrl: './auction-kata.component.css',
})
export class AuctionKataComponent {
  bidders: Bidder[] = [];
  result: Winner = { winner: '', winningPrice: 0 };
  reservePrice: number = 0;

  constructor(private auctionService: AuctionService) {}

  onBidderAdded(addedBidder: Bidder): void {
    if (this.bidders.length == 0) {
      this.bidders?.push(addedBidder);
    } else {
      const existingBidder = this.bidders?.find(bidder => bidder.name === addedBidder.name);

      if (existingBidder) {
        existingBidder.bids.push(Number(addedBidder.bids[0]));
      } else {
        this.bidders?.push(addedBidder);
      }
    }

    this.bidders = [...this.bidders];
  }

  calculateAuctionWinner(bidders: Bidder[]): void {
    if (this.reservePrice === 0) return alert('Veuillez saisir un montant de réserve');

    this.result = this.auctionService.calculateAuctionWinner(bidders, this.reservePrice);
  }
}
