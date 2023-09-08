import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ResultsTableComponent {
  service = inject(TodosService);
  todos$ = this.service.getTodos();

  sumSquaresUpToN(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i ** 2;
    }
    return sum;
  }
}
