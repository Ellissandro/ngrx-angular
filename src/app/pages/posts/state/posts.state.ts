import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Post } from '../posts.model';

export type PostsState = EntityState<Post>;

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({});

export const initalPostsState: PostsState = postsAdapter.getInitialState();
