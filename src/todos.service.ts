import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Todo } from './todo';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  http = inject(HttpClient);
  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((results) =>
          results.slice(0, 15).map((todo) => ({
            ...todo,
            value: (Math.random() * 20_000_000) | 0,
          }))
        )
      );
  }
}
