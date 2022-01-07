import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../user.model";

export const USER_STATE_NAME = 'posts';
const getUserSatate = createFeatureSelector<UserState>(USER_STATE_NAME);
export const getUser = createSelector(getUserSatate, state => {
    return state.user;
})

export const getUsers = createSelector(getUserSatate, state => {
    return state.users;
})
