import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';


export const SIGN_UP_START = '[auth page] signup start';
export const SIGN_UP_SUCCESS = '[auth page] signup success';

export const loginStart = createAction(
    LOGIN_START,
    props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{ user: User }>()
);

export const signupStart = createAction(
    SIGN_UP_START,
    props<{ email: string; password: string }>()
)

export const signupSuccess = createAction(
    SIGN_UP_SUCCESS,
    props<{ user: User }>()
)