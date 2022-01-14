import { createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePostSuccess } from "./posts.actions";
import { initalPostsState } from "./posts.state";

const _postsReducer = createReducer(
    initalPostsState,
    on(addPostSuccess, (state, action) => {
        let post = { ...action.post };

        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),

    on(updatePostSuccess, (state, action) => {
        const updateedPosts = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        })

        return {
            ...state,
            posts: updateedPosts
        }
    }),

    on(deletePostSuccess, (state, { id }) => {
        const updateedPosts = state.posts.filter(post => {
            return post.id !== id;
        })
        return {
            ...state,
            posts: updateedPosts
        }
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts
        }
    })
)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
}