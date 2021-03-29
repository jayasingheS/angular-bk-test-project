import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesComponent implements OnInit {

  colorT = '#000000';

  constructor(private router: Router, private themeService: ThemeService) {
    this.colorT = themeService.getTheme();
    console.log(themeService.getTheme());
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.colorT = this.themeService.getTheme();
  }

  onLoadeSalerMid() {
    this.router.navigate(['/SalesMid']);
  }
}
