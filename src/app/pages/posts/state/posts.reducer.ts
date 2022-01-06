import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./posts.actions";
import { initalPostsState } from "./posts.state";

const _postsReducer = createReducer(
    initalPostsState,
    on(addPost, (state, action) => {
        let post = { ...action.post };
        post.id = String(state.posts.length + 1);

        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),

    on(updatePost, (state, action) => {
        const updateedPosts = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        })

        return {
            ...state,
            posts: updateedPosts
        }
    }),

    on(deletePost, (state, { id }) => {
        const updateedPosts = state.posts.filter(post => {
            return post.id !== id;
        })
        return {
            ...state,
            posts: updateedPosts
        }
    })
)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
}