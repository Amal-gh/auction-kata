import { Component, EventEmitter, Output } from '@angular/core';
import { Bidder } from '../../commun/models/Bidder';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auction-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auction-form.component.html',
  styleUrl: './auction-form.component.css',
})
export class AuctionFormComponent {
  @Output() bidderAdded: EventEmitter<any> = new EventEmitter<any>();

  bidderName: string = '';
  bidAmount: string = '';

  addNewBidder(): void {
    if (this.bidderName !== '' && this.bidAmount !== '') {
      const bidder: Bidder = {
        name: this.bidderName,
        bids: [Number(this.bidAmount)],
      };

      this.bidderAdded.emit(bidder);

      this.resetAuctionForm();
    }
  }

  resetAuctionForm(): void {
    this.bidderName = '';
    this.bidAmount = '';
  }
}
