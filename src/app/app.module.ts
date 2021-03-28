import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesCustomersComponent } from './sales-customers/sales-customers.component';
import { SalesEstimateComponent } from './sales-estimate/sales-estimate.component';
import { SalesItemsComponent } from './sales-items/sales-items.component';
import { SalesSettingsComponent } from './sales-settings/sales-settings.component';
import { SalesComponent } from './sales/sales.component';
import { SupportComponent } from './support/support.component';
import { SalesNavigationComponent } from './Compornent/sales-navigation/sales-navigation.component';
import { SalesMidComponent } from './sales/sales-mid/sales-mid.component';
import { SalesItemsMidComponent } from './sales-items/sales-items-mid/sales-items-mid.component';
import { SalesCustomersMidComponent } from './sales-customers/sales-customers-mid/sales-customers-mid.component';






@NgModule({
  declarations: [
    AppComponent,
    SalesCustomersComponent,
    SalesEstimateComponent,
    SalesItemsComponent,
    SalesSettingsComponent,
    SalesComponent,
    SupportComponent,
    SalesNavigationComponent,
    SalesMidComponent,
    SalesItemsMidComponent,
    SalesCustomersMidComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
