import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-showroom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-showroom.html',
})
export class HeroShowroom {
  // Usamos signals para las métricas, ideal para el modo Zoneless
  public metrics = signal([
    { label: 'Carga', value: '1.2s' },
    { label: 'Galería', value: '4K' },
    { label: 'Optimización', value: 'Elite' },
  ]);
}
