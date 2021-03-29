import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sales-settings',
  templateUrl: './sales-settings.component.html',
  styleUrls: ['./sales-settings.component.css', '../../assets/css/libs.bundle.css', '../../assets/css/theme.bundle.css']
})
export class SalesSettingsComponent implements OnInit {
  colorT = '#000000';
  constructor(private router: Router, private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    this.colorT = this.themeService.getTheme();
  }
}
