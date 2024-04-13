import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionKataComponent } from './auction-kata.component';
import { Bidder } from '../../commun/models/Bidder';
import { Winner } from '../../commun/models/Winner';
import { AuctionService } from '../../commun/services/auction.service';

describe('AuctionKataComponent', () => {
  let component: AuctionKataComponent;
  let fixture: ComponentFixture<AuctionKataComponent>;
  let mockAuctionService: Partial<AuctionService>;

  beforeEach(async () => {
    mockAuctionService = {
      calculateAuctionWinner: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [AuctionKataComponent],
      providers: [{ provide: AuctionService, useValue: mockAuctionService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionKataComponent);
    component = fixture.componentInstance;
    window.alert = jest.fn();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onBidderAdded', () => {
    it('should add bidder correctly', () => {
      // Given
      const addedBidder: Bidder = { name: 'John', bids: [10] };

      // When
      component.onBidderAdded(addedBidder);

      // Then
      expect(component.bidders.length).toBe(1);
      expect(component.bidders[0]).toEqual(addedBidder);
    });

    it('should add new bid to existing bidder', () => {
      // Given
      component.bidders = [
        { name: 'John', bids: [10] },
        { name: 'Mike', bids: [15] },
      ];
      const addedBidder: Bidder = { name: 'John', bids: [20] };

      // When
      component.onBidderAdded(addedBidder);

      // Then
      expect(component.bidders.length).toBe(2);
      expect(component.bidders[0].bids).toEqual([10, 20]);
      expect(component.bidders[1].bids).toEqual([15]);
    });
  });

  describe('calculateAuctionWinner', () => {
    it('should calculate auction winner', () => {
      const bidders: Bidder[] = [
        { name: 'John', bids: [10] },
        { name: 'Alice', bids: [15] },
      ];
      const mockWinner: Winner = { winner: 'Alice', winningPrice: 15 };
      jest.spyOn(mockAuctionService, 'calculateAuctionWinner').mockReturnValue(mockWinner);

      component.reservePrice = 20;
      component.calculateAuctionWinner(bidders);

      expect(component.result).toEqual(mockWinner);
      expect(mockAuctionService.calculateAuctionWinner).toHaveBeenCalledWith(bidders, 20);
    });

    it('should not calculate auction winner if reserve price is 0', () => {
      jest.spyOn(window, 'alert');
      const bidders: Bidder[] = [
        { name: 'John', bids: [10] },
        { name: 'Alice', bids: [15] },
      ];
      component.reservePrice = 0;
      component.calculateAuctionWinner(bidders);
      expect(component.result).toEqual({ winner: '', winningPrice: 0 });
    });
  });
});
