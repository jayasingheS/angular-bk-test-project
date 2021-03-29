import {Injectable, Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import { Theme, light, dark } from './theme/theme.module';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{
  private colorActive: string = '#624006';
  constructor() { }
  getTheme(): string {
    return this.colorActive;
  }
  setTheme(setColor: string): void {
    this.colorActive = setColor;
  }
}
