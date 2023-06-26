import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss'],
})
export class PhilosophyComponent implements OnInit {
  image = [
    '../../../assets/testimonials/testi1.webp',
    '../../../assets/testimonials/testi2.webp',
    '../../../assets/testimonials/testi3.webp',
    '../../../assets/testimonials/testi4.webp',
  ];

  day = ['Day 1', 'Day 2', 'Day 7', 'Day 13'];
  currentImage = 0;

  showImage = true;
  showDay = true;

  overlay = false;

  constructor() {}

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.image.length;
      this.showImage = false;
      this.showDay = false;

      setInterval(() => {
        this.showImage = true;
        this.showDay = true;
      }, 0.8);
    }, 4000);
  }

  showImageOverlay() {
    this.overlay = true;
  }
}
