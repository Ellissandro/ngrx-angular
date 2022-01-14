import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';

export const GET_USERS = '[users page] get users';
export const GET_USERS_SUCCESS = '[users page] get users success';
export const ADD_USER = '[users page] add users';
export const ADD_USERS_SUCCESS = '[users page] add users success';
export const DELETE_USER = '[users page] delete users';
export const SEARCH_USER = '[users page] search users';

export const getUsers = createAction(GET_USERS, props<{ user: User }>());

export const getUsersSuccess = createAction(
  GET_USERS_SUCCESS,
  props<{ user: User }>(),
);

export const addUser = createAction(ADD_USER, props<{ user: User }>());

export const addUserSuccess = createAction(
  ADD_USERS_SUCCESS,
  props<{ user: User }>(),
);

export const deleteUser = createAction(DELETE_USER, props<{ id: string }>());

export const searchUsers = createAction(
  SEARCH_USER,
  props<{ search: string }>(),
);
