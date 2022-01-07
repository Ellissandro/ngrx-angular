import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { USER_STATE_NAME } from "../user/state/user.selector";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsComponent } from "./posts-list/posts.component";
import { postsReducer } from "./state/posts.reducer";

const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
        children: [
            { path: 'add', component: AddPostComponent },
            { path: 'edit/:id', component: EditPostComponent },
        ]
    }
];

@NgModule({
    declarations: [
        PostsComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(USER_STATE_NAME, postsReducer)
    ]
})
export class PostsModule { }