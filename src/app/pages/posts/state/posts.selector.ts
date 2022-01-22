import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/store/router/custom-serializer';
import { getCurrentRouter } from 'src/app/store/router/router.selector';
import { postsAdapter, PostsState } from './posts.state';

export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postSelectors = postsAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postSelectors.selectAll);
export const getPostsEntities = createSelector(
  getPostsState,
  postSelectors.selectEntities,
);

export const getPostById = createSelector(
  getPostsEntities,
  getCurrentRouter,
  (posts, router: RouterStateUrl) => {
    return posts ? posts[router.params['id']] : null;
  },
);
