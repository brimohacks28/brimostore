import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { BlogComponent } from './Pages/decor/blog.component';
import { GiftsComponent } from './Pages/gifts/gifts.component';
import { HouseholdComponent } from './Pages/household/household.component';

import { CartComponent } from './Pages/cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'decor',component:BlogComponent},
  {path:'gifts',component:GiftsComponent},
  {path:'households',component:HouseholdComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
