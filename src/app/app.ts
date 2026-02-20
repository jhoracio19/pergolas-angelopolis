import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroShowroom } from './components/hero-showroom/hero-showroom';
import { BentoGalleryComponent } from './components/bento-gallery/bento-gallery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroShowroom, BentoGalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pergolas-showroom');
}
