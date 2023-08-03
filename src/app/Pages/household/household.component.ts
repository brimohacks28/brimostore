import { Component, OnInit } from '@angular/core';
import { OrderDetailsServiceService } from 'src/app/services/order-details-service.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})
export class HouseholdComponent implements OnInit {
  constructor(private service:OrderDetailsServiceService){}
  GiftData: any;
  ngOnInit(): void {
    this.GiftData=this.service.HouseholdDetails;
  }
}
