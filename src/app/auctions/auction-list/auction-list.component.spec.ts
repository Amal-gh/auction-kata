import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionListComponent } from './auction-list.component';
import { AppComponent } from '../../app.component';

describe('AuctionListComponent', () => {
  let component: AuctionListComponent;
  let fixture: ComponentFixture<AuctionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Ajouter un enchérisseur');
  });
});
