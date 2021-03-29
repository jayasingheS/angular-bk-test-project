import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-sales-estimate',
  templateUrl: './sales-estimate.component.html',
  styleUrls: ['./sales-estimate.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesEstimateComponent implements OnInit {

  colorT = '#000000';
  constructor(private router: Router, private themeService: ThemeService) { }

  ngAfterContentChecked(){
    this.colorT = this.themeService.getTheme();
  }
  ngOnInit(): void {
  }

  SalesEstimateMid(){
    this.router.navigate(['/SalesEstimate/SalesEstimateMid']);
  }
  ngOnChanges(): void{
    console.log(this.themeService.getTheme());

  }
}
