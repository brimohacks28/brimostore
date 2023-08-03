import { Component, OnInit } from '@angular/core';
import { OrderDetailsServiceService } from 'src/app/services/order-details-service.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  constructor(private service:OrderDetailsServiceService){}
      GiftData:any;
    ngOnInit(): void {
      this.GiftData =this.service.GiftDetails;
  }
}
