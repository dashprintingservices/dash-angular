import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ClientsModule} from "./clients/clients.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SalesModule } from './sales/sales.module';
import { InventoryModule } from './inventory/inventory.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ClientsModule,
    SalesModule,
    InventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
