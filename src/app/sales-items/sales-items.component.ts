import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sales-items',
  templateUrl: './sales-items.component.html',
  styleUrls: ['./sales-items.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLoadeSalerItemsMid(){
    this.router.navigate(['/SalesItems/SalesItemsMid']);
  }
}
