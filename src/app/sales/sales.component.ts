import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoadeSalerMid(){
    this.router.navigate(['/SalesMid']);
  }

}
