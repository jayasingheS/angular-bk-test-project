import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
@Component({
  selector: 'app-sales-mid',
  templateUrl: './sales-mid.component.html',
  styleUrls: ['./sales-mid.component.css', '../../../assets/css/libs.bundle.css', '../../../assets/css/theme.bundle.css'],

})
export class SalesMidComponent implements OnInit {
  lodingFeature = '1';
  colorT = '#624096';
  constructor( private themeService: ThemeService) { }
  ngAfterContentChecked(){
    this.colorT = this.themeService.getTheme();
  }
  ngOnInit(): void {
    console.log(this.themeService.getTheme());
  }
  onSlect( item: string): void{
    this.lodingFeature = item;
  }
  ngOnChanges(): void{
   console.log(this.themeService.getTheme());

  }


  toggleTheme(value: string): void {
    this.themeService.setTheme(value);
    console.log(this.themeService.getTheme());
    this.colorT = this.themeService.getTheme();
  }
  toggleThemeCustom(value): void {
    this.themeService.setTheme(value.value);
    console.log(this.themeService.getTheme());
    this.colorT = this.themeService.getTheme();
  }
}
