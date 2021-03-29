import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
@Component({
  selector: 'app-sales-customers-mid',
  templateUrl: './sales-customers-mid.component.html',
  styleUrls: ['./sales-customers-mid.component.css', '../../../assets/css/libs.bundle.css', '../../../assets/css/theme.bundle.css']
})
export class SalesCustomersMidComponent implements OnInit {
  colorT = '#624096';
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }
  ngAfterContentChecked(){
    this.colorT = this.themeService.getTheme();
  }

}
