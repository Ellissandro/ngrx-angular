import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);


export const isAuthenticated = createSelector(getAuthState, (state)=> {
    return state.user ? true : false;
})