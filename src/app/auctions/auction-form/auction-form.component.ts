import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Bidder} from "../../commun/models/Bidder";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-auction-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './auction-form.component.html',
  styleUrl: './auction-form.component.css'
})
export class AuctionFormComponent {

  @Output() bidderAdded = new EventEmitter<any>();

  // @Input() bidders: Bidder[] | undefined;

  bidderName: string = '';
  // vérifier le type
  bidAmount: string = '';

  addNewBidder() {
    console.log("add !!")
    if (this.bidderName && this.bidAmount) {
      // TODO: refaire la logique

      // this.bidders?.forEach(bidder => {
      //
      //   if (bidder.name === this.bidderName) {
      //     console.log("dans le if:  ");
      //     bidder.bids.push(Number(this.bidAmount));
      //
      //   } else {
      //     console.log("dans le else ");
      //     this.bidders?.push({
      //       name: this.bidderName,
      //       bids: [Number(this.bidAmount)]
      //     })
      //   }
      //
      // })
      // this.bidders?.find(bidder =>
      //   bidder.name === this.bidderName ?
      //     bidder.bids.push(Number(this.bidAmount)) :
      //     this.bidders?.push({
      //       name: this.bidderName,
      //       bids: [Number(this.bidAmount)]
      //     })
      // )

      const bidder: Bidder = {
        name: this.bidderName,
        bids: [Number(this.bidAmount)]
      }
      this.bidderAdded.emit(bidder);

      // this.bidderAdded.emit(this.bidders);

      this.bidderName = '';
      this.bidAmount = '';
    }
  }
}
