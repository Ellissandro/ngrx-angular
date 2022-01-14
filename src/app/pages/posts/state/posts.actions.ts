import { createAction, props } from '@ngrx/store';
import { Post } from '../posts.model';

export const ADD_POST_ACTION = '[posts page] add posts';
export const ADD_POST_SUCCESS = '[posts page] add posts success';
export const UPDATE_POST_ACTION = '[posts page] update posts';
export const UPDATE_POST_SUCCESS = '[posts page] update sucess';
export const DELETE_POST_ACTION = '[posts page] delete posts';
export const DELETE_POST_SUCCESS = '[posts page] delete posts success';
export const LOAD_POSTS = '[post page] load posts';
export const LOAD_POSTS_SUCCESS = '[post page] load posts success';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());

export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{ post: Post }>(),
);

export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>(),
);

export const updatePostSuccess = createAction(
  UPDATE_POST_SUCCESS,
  props<{ post: Post }>(),
);

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string | undefined }>(),
);

export const deletePostSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{ id: string | undefined }>(),
);

export const loadPosts = createAction(LOAD_POSTS);

export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: Post[] }>(),
);
