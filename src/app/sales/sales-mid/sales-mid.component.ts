import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-mid',
  templateUrl: './sales-mid.component.html',
  styleUrls: ['./sales-mid.component.css', '../../../assets/css/libs.bundle.css', '../../../assets/css/theme.bundle.css']
})
export class SalesMidComponent implements OnInit {
  lodingFeature:string = '1';
  constructor() { }

  ngOnInit(): void {
  }
  onSlect( item: string){
    this.lodingFeature = item;
  }
}
