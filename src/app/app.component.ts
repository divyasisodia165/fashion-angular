import { Component } from '@angular/core';
import { FashionHeroComponent } from './fashion-hero/fashion-hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FashionHeroComponent],
  template: `<app-fashion-hero></app-fashion-hero>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

