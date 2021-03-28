import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sales-estimate-mid',
  templateUrl: './sales-estimate-mid.component.html',
  styleUrls: ['./sales-estimate-mid.component.css', '../../../assets/css/libs.bundle.css', '../../../assets/css/theme.bundle.css']
})
export class SalesEstimateMidComponent implements OnInit {

  lodingFeature:string = '1';
  constructor() { }

  ngOnInit(): void {
  }
  onSlect( item: string){
    this.lodingFeature = item;
  }
}
