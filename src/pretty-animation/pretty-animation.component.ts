import { Component, ElementRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-pretty-animation',
  templateUrl: './pretty-animation.component.html',
  styleUrls: ['./pretty-animation.component.css'],
  imports: [],
  standalone: true,
})
export class PrettyAnimationComponent implements OnInit {
  x = 0;
  dx = 5;
  color = [255, 0, 0];
  element = inject(ElementRef);
  start = Date.now();
  frame = 0;
  ngOnInit() {
    this.computeNextFrame();
  }

  computeNextFrame() {
    this.frame++;
    const rect = this.element.nativeElement.getBoundingClientRect();
    this.x = (Date.now() - this.start) / 5;
    this.x %= rect.width - 80;
    const [r, g, b] = this.color;
    this.color = [
      this.clampColor(r + (Math.random() - 0.5) * 30),
      this.clampColor(g + (Math.random() - 0.5) * 30),
      this.clampColor(b + (Math.random() - 0.5) * 30),
    ];

    if (this.frame % 120 === 0) {
      console.log('frame', this.frame);
    }

    setTimeout(() => this.computeNextFrame(), Math.floor(1000 / 60));
  }

  clampColor(a: number) {
    return Math.max(0, Math.min(a, 255));
  }

  get rgb() {
    return `rgb(${this.color.join(', ')})`;
  }
}
