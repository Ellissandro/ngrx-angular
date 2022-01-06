import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // count$: Observable<number>;
  // title = 'crud-ngrx';

  // constructor(private store: Store<{ count: number }>) {
  //   this.count$ = store.select('count');
  // }

  // increment() {
  //   this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }
}
