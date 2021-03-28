import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sales-estimate',
  templateUrl: './sales-estimate.component.html',
  styleUrls: ['./sales-estimate.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesEstimateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SalesEstimateMid(){
    this.router.navigate(['/SalesEstimate/SalesEstimateMid']);
  }

}
