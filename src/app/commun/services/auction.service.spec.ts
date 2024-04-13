import { TestBed } from '@angular/core/testing';

import { AuctionService } from './auction.service';
import { Bidder } from '../models/Bidder';

describe('AuctionService', () => {
  let service: AuctionService;
  let bidders: Bidder[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionService);

    bidders = [
      { name: 'A', bids: [110, 130] },
      { name: 'B', bids: [] },
      { name: 'C', bids: [125] },
      { name: 'D', bids: [105, 115, 90] },
      { name: 'E', bids: [132, 135, 140] },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateAuctionWinner', () => {
    it('sould return the real Winner when maxBid is greater than reservePrice', () => {
      // Given
      const reservePrice = 100;

      // When
      const expectedBidder = service.calculateAuctionWinner(bidders, reservePrice);

      // Then
      expect(expectedBidder.winner).toEqual('E');
      expect(expectedBidder.winningPrice).toEqual(140);
    });

    it('sould return an empty Winner object when maxBid is less than reservePrice', () => {
      // Given
      const reservePrice = 300;

      // When
      const expectedBidder = service.calculateAuctionWinner(bidders, reservePrice);

      // Then
      expect(expectedBidder.winner).toEqual('');
      expect(expectedBidder.winningPrice).toEqual(0);
    });
  });
});
