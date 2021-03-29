import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-sales-items',
  templateUrl: './sales-items.component.html',
  styleUrls: ['./sales-items.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesItemsComponent implements OnInit {
  colorT = '#000000';
  constructor(private router: Router,private themeService: ThemeService) { }

  ngOnInit(): void {
  }
  ngAfterContentChecked(){
    this.colorT = this.themeService.getTheme();
  }
  onLoadeSalerItemsMid(){
    this.router.navigate(['/SalesItems/SalesItemsMid']);
  }
}
