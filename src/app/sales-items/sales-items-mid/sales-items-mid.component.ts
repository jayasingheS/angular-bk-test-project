import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sales-items-mid',
  templateUrl: './sales-items-mid.component.html',
  styleUrls: ['./sales-items-mid.component.css', '../../../assets/css/libs.bundle.css', '../../../assets/css/theme.bundle.css']
})
export class SalesItemsMidComponent implements OnInit {
  colorT = '#000000';
  constructor(private router: Router, private themeService: ThemeService) { }
  ngAfterContentChecked(){
    this.colorT = this.themeService.getTheme();
  }
  ngOnInit(): void {
  }

}
