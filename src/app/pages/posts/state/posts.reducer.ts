import { Action, createReducer, on } from '@ngrx/store';
import {
  addPostSuccess,
  deletePostSuccess,
  loadPostsSuccess,
  updatePostSuccess,
} from './posts.actions';
import { initalPostsState, postsAdapter, PostsState } from './posts.state';

const _postsReducer = createReducer(
  initalPostsState,
  on(addPostSuccess, (state, action) => {
    return postsAdapter.addOne(action.post, state);
  }),

  on(updatePostSuccess, (state, action) => {
    return postsAdapter.updateOne(action.post, state);
  }),

  on(deletePostSuccess, (state, { id }) => {
    return postsAdapter.removeOne(id, state);
  }),

  on(loadPostsSuccess, (state, action) => {
    return postsAdapter.setAll(action.posts, state);
  }),
);

export function postsReducer(state: PostsState, action: Action): PostsState {
  return _postsReducer(state, action);
}
