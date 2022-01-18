import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { autoLogout } from '../auth/state/auth.actions';
import { AuthResponseData } from '../models/AuthResponseData.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STORAGE_USER_KEY = 'userData';
  timeoutInterval: any;
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.athenticateMock(email, password);
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.athenticateMock(email, password);
  }

  private athenticateMock(email: string, password: string) {
    if (email.length < 24) {
      return this.http.get<AuthResponseData>('');
    }

    return of({
      email: email,
      password: password,
      exprireIn: '100000000',
      loalId: '',
      refreshToken: '',
      registred: true,
      idToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    }).pipe(delay(2000));
  }

  formatUser(data: AuthResponseData): User {
    const expiratioNDate = new Date(
      new Date().getTime() + Number(data.exprireIn) * 1000,
    );
    return new User(data.email, data.idToken, data.loalId, expiratioNDate);
  }

  setUserInLocalStorage(user: User): void {
    localStorage.setItem(this.STORAGE_USER_KEY, JSON.stringify(user));
    this.runTimeoutInterval(user);
  }

  runTimeoutInterval(user: User): void {
    const todayDate = new Date().getTime();
    const expirationDate = user.expirateDate.getTime();
    const timeInterval = expirationDate - todayDate;

    this.timeoutInterval = setTimeout(() => {
      this.store.dispatch(autoLogout());
    }, timeInterval);
  }

  getUserFromLocalStorage(): User | null {
    const userDataString = localStorage.getItem(this.STORAGE_USER_KEY);

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate,
      );

      this.runTimeoutInterval(user);
      return user;
    }

    return null;
  }

  logout() {
    localStorage.removeItem(this.STORAGE_USER_KEY);

    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }
}
