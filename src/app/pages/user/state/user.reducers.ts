import { createReducer, on } from '@ngrx/store';
import { addUser, deleteUser, searchUsers } from './user.actions';
import { initalUserState } from './user.state';

export const userReducer = createReducer(
  initalUserState,
  on(addUser, (state, action) => {
    const user = { ...action.user };
    user.id = String(state.users.length + 1);

    return {
      ...state,
      users: [...state.users, user],
    };
  }),

  on(deleteUser, (state, { id }) => {
    const updateedUsers = state.users.filter((user) => {
      return user.id !== id;
    });
    return {
      ...state,
      users: updateedUsers,
    };
  }),

  on(searchUsers, (state, { search }) => {
    return {
      ...state,
      users: state.users,
    };
  }),
);
