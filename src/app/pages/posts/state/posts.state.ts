import { Post } from '../posts.model';

export interface PostsState {
  posts: Post[];
}

export const initalPostsState: PostsState = {
  posts: [],
};
