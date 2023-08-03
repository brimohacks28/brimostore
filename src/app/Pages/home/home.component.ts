import { Component,OnInit } from '@angular/core';
import { OrderDetailsServiceService } from 'src/app/services/order-details-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:OrderDetailsServiceService){}
  ProductData:any;
  ngOnInit(): void {
    this.ProductData =this.service.StarletDetails;
  }
}
