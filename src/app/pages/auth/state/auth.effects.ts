import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { AuthService } from "../../services/auth.service";
import { loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService
                    .login(action.email, action.password)
                    .pipe(map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        this.store.dispatch(setErrorMessage({ message: '' }))
                        const user = this.authService.formatUser(data)
                        return loginSuccess({ user })
                    }),
                        catchError((error) => {
                            this.store.dispatch(setLoadingSpinner({ status: false }))
                            return of(setErrorMessage({ message: error.message }))
                        })
                    )
            })
        )
    })

    loginRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(loginSuccess),
                tap(() => {
                    this.router.navigate(['/'])
                }))
        }, { dispatch: false })

    signUpRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(signupSuccess),
                tap(() => {
                    this.router.navigate(['/'])
                }))
        }, { dispatch: false })


    signUp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap(action => {
                return this.authService.signUp(action.email, action.password)
                    .pipe(map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        this.store.dispatch(setErrorMessage({ message: '' }))
                        const user = this.authService.formatUser(data);
                        return signupSuccess({ user });
                    }),
                        catchError((error) => {
                            this.store.dispatch(setLoadingSpinner({ status: false }))
                            return of(setErrorMessage({ message: error.message }))
                        })
                    )
            }))
    })
}