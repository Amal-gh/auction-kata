import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: 'app-auction-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatTableModule
  ],
  templateUrl: './auction-list.component.html',
  styleUrl: './auction-list.component.css'
})
export class AuctionListComponent {

  @Input() bidders: any[] = [];
  displayedColumns: string[] = ['nom', 'montant'];
}
