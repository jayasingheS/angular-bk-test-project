import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/libs.bundle.css', '../assets/css/theme.bundle.css']
})
export class AppComponent {
  title = 'angular-bk-test-project-one';
  colorT = '#000000';
  constructor( private themeService: ThemeService) {
    this.colorT = themeService.getTheme();
    console.log(themeService.getTheme());
  }
  ngAfterContentChecked(){
    this.colorT = this.themeService.getTheme();
  }

}
