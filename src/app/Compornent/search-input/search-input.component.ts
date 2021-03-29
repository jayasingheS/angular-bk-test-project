import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  colorT = '#000000';
  constructor(private router: Router, private themeService: ThemeService) {
    this.colorT = themeService.getTheme();
    console.log(themeService.getTheme());
  }
  ngAfterContentChecked() {
    this.colorT = this.themeService.getTheme();
  }

  ngOnInit(): void {
  }

}
