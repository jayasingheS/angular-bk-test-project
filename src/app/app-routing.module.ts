import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SalesCustomersComponent } from './sales-customers/sales-customers.component';
import { SalesEstimateComponent } from './sales-estimate/sales-estimate.component';
import { SalesItemsComponent } from './sales-items/sales-items.component';
import { SalesSettingsComponent } from './sales-settings/sales-settings.component';
import { SalesComponent } from './sales/sales.component';
import { SupportComponent } from './support/support.component';
import { SalesMidComponent } from './sales/sales-mid/sales-mid.component';
import { SalesItemsMidComponent } from './sales-items/sales-items-mid/sales-items-mid.component';
import { SalesCustomersMidComponent } from './sales-customers/sales-customers-mid/sales-customers-mid.component';
import { SalesEstimateMidComponent } from './sales-estimate/sales-estimate-mid/sales-estimate-mid.component';
const routes: Routes = [
  { path: '', component: SalesComponent },
  { path: 'SalesCustomers', component: SalesCustomersComponent },
  { path: 'SalesEstimate', component: SalesEstimateComponent },
  { path: 'SalesItems', component: SalesItemsComponent },
  { path: 'SalesSettings', component: SalesSettingsComponent },
  { path: 'Support', component: SupportComponent },
  { path: 'SalesMid', component: SalesMidComponent },
  { path: 'SalesItems/SalesItemsMid', component: SalesItemsMidComponent },
  { path: 'SalesCustomers/SalesCustomersMid', component: SalesCustomersMidComponent },
  { path: 'SalesEstimate/SalesEstimateMid', component: SalesEstimateMidComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
