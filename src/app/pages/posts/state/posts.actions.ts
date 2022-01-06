import { createAction, props } from "@ngrx/store";
import { Post } from "../posts.model";

export const ADD_POST_ACTION = '[posts page] add posts';
export const UPDATE_POST_ACTION = '[posts page] update posts';
export const DELETE_POST_ACTION = '[posts page] delete posts';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST_ACTION, props<{ post: Post }>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: string | undefined }>());