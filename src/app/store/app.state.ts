import { postsReducer } from "../pages/posts/state/posts.reducer";
import { PostsState } from "../pages/posts/state/posts.state";
import { userReducer } from "../pages/user/state/user.reducers";
import { UserState } from "../pages/user/user.model";

export interface AppState {
    user: UserState;
    posts: PostsState;
}
export const appReducer = {
    user: userReducer,
    posts: postsReducer
}