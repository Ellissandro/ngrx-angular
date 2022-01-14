import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { User, UserState } from '../user.model';
import { getUser, getUsers } from '../state/user.selector';
import { addUser, deleteUser, searchUsers } from '../state/user.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  search = new FormControl(null);
  done = new Subject();
  users$: Observable<User[]> = this.store.select(getUsers);

  constructor(
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.registerChangeSearch();
  }

  registerChangeSearch() {
    this.search?.valueChanges?.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        // const search = String(this.search.value).toLowerCase();
        // Wip - Working In Progress
        // this.store.dispatch(searchUsers({ search }))
      })
    ).subscribe();
  }

  onSubmit(user: User) {
    this.store.dispatch(addUser({ user }));
  }

  delete(id: string) {
    this.store.dispatch(deleteUser({ id }));
  }

  trackByFn(_: number, item: User) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }
}
