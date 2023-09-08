import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { ResultsTableComponent } from './results-table/results-table.component';
import { PrettyAnimationComponent } from './pretty-animation/pretty-animation.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ResultsTableComponent, PrettyAnimationComponent],
  template: `
    <app-results-table/>
    <app-pretty-animation *ngIf="showAnimation"/>
    <button (click)="showAnimation = !showAnimation">toggle animation</button>
  `,
})
export class App {
  showAnimation = true;
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
