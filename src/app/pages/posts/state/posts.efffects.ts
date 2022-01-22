import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { PostsService } from '../../services/post.service';
import { Post } from '../posts.model';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPosts,
  loadPostsSuccess,
  updatePost,
  updatePostSuccess,
} from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() => {
        return this.postsService.getPosts().pipe(
          map((posts) => {
            return loadPostsSuccess({ posts });
          }),
        );
      }),
    );
  });

  addPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((post) => {
            return addPostSuccess({ post });
          }),
        );
      }),
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postsService.updatePost(action.post).pipe(
          map((post) => {
            const updatedPost: Update<Post> = {
              id: post.id,
              changes: {
                ...action.post,
              },
            };
            return updatePostSuccess({ post: updatedPost });
          }),
        );
      }),
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postsService.deletePost(action.id).pipe(
          map((id) => {
            return deletePostSuccess({ id });
          }),
        );
      }),
    );
  });

  getSinglePost = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => {
        return r.payload.routerState.url.startsWith('/posts/details');
      }),
      map((r: RouterNavigationAction) => {
        return r.payload.routerState['params']['id'];
      }),
      switchMap((id) => {
        return this.postsService.getPostById(id).pipe(
          map((post) => {
            const postData = [{ ...post, id }];
            return loadPostsSuccess({ posts: postData });
          }),
        );
      }),
    );
  });
}
