import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-sales-customers',
  templateUrl: './sales-customers.component.html',
  styleUrls: ['./sales-customers.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesCustomersComponent implements OnInit {
  colorT = '#000000';
  constructor(private router: Router,private themeService: ThemeService) {
  }
  ngAfterContentChecked(){
    this.colorT = this.themeService.getTheme();
  }
  ngOnInit(): void {
  }
  onLoadeSalerCustomerMid() {
    this.router.navigate(['/SalesCustomers/SalesCustomersMid']);
  }
}
