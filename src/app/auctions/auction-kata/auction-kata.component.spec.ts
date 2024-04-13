import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionKataComponent } from './auction-kata.component';

describe('AuctionKataComponent', () => {
  let component: AuctionKataComponent;
  let fixture: ComponentFixture<AuctionKataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionKataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionKataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
