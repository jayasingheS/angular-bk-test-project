import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sales-customers',
  templateUrl: './sales-customers.component.html',
  styleUrls: ['./sales-customers.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesCustomersComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  onLoadeSalerCustomerMid() {
    this.router.navigate(['/SalesCustomers/SalesCustomersMid']);
  }
}
