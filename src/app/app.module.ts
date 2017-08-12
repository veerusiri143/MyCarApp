import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpetComponent } from './cockpet/cockpet.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CarlistItemComponent } from './carlist/carlist-item/carlist-item.component';
import { CardetailsComponent } from './cardetails/cardetails.component';


@NgModule({
  declarations: [
    AppComponent,
    CockpetComponent,
    CarlistComponent,
    CarlistItemComponent,
    CardetailsComponent
  ],
  imports: [
    BrowserModule,
      FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
