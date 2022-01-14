import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogout } from 'src/app/pages/auth/state/auth.actions';
import { isAuthenticated } from 'src/app/pages/auth/state/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<any>;
  constructor(private sotre: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuthenticated = this.sotre.select(isAuthenticated);
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.sotre.dispatch(autoLogout());
  }
}
