import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Post } from '../posts.model';

export type PostsState = EntityState<Post>;

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  sortComparer: sortByName,
});

export const initalPostsState: PostsState = postsAdapter.getInitialState({});

export function sortByName(a: Post, b: Post): number {
  const compare = a.title.localeCompare(b.title);

  if (compare > 0) {
    return -1;
  }

  if (compare < 0) {
    return 1;
  }

  return compare;
}
