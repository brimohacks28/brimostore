import { Component, OnInit } from '@angular/core';
import { OrderDetailsServiceService } from 'src/app/services/order-details-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  constructor(private service:OrderDetailsServiceService){}
      DecorData:any;
  ngOnInit(): void {
    this.DecorData =this.service.DecorDetails;
  }
}
