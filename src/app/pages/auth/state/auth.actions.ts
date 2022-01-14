import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const SIGN_UP_START = '[auth page] signup start';
export const SIGN_UP_SUCCESS = '[auth page] signup success';
export const AUTO_LOGIN = '[auth page] auto login';
export const LOGOUT = '[auth page] logout';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>(),
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User; redirect: boolean }>(),
);

export const signupStart = createAction(
  SIGN_UP_START,
  props<{ email: string; password: string }>(),
);

export const signupSuccess = createAction(
  SIGN_UP_SUCCESS,
  props<{ user: User; redirect: boolean }>(),
);

export const autoLogin = createAction(AUTO_LOGIN);
export const autoLogout = createAction(LOGOUT);
