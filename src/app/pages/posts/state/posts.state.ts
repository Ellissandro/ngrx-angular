import { Post } from "../posts.model";

export interface PostsState {
    posts: Post[];
}

export const initalPostsState: PostsState = {
    posts: [
        { id: '1', title: 'Sample Title 1', description: 'Sample Descrition 1' },
        { id: '2', title: 'Sample Title 2', description: 'Sample Descrition 2' },
        { id: '3', title: 'Sample Title 3', description: 'Sample Descrition 3' },
    ]
}