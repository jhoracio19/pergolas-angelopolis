import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bento-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bento-gallery.html',
})
export class BentoGalleryComponent {
  public features = signal([
    {
      title: 'Materiales Aeroespaciales',
      desc: 'Aluminio estructural de alta resistencia.',
      size: 'md:col-span-2 md:row-span-2',
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000',
    },
    {
      title: 'Domótica Sonata',
      desc: 'Control total desde tu iPhone 16 Pro.',
      size: 'md:col-span-1 md:row-span-1',
      img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Diseño Bioclimático',
      desc: 'Confort térmico todo el año.',
      size: 'md:col-span-1 md:row-span-2',
      img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Iluminación Elite',
      desc: 'Escenas personalizadas para cada evento.',
      size: 'md:col-span-1 md:row-span-1',
      img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800',
    },
  ]);
}
