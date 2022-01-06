import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../user.model";

const getUserSatate = createFeatureSelector<UserState>('user');
export const getUser = createSelector(getUserSatate, state => {
    return state.user;
})

export const getUsers = createSelector(getUserSatate, state => {
    return state.users;
})
