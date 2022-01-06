import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddPostComponent } from './pages/posts/add-post/add-post.component';
import { EditPostComponent } from './pages/posts/edit-post/edit-post.component';
import { PostsComponent } from './pages/posts/posts-list/posts.component';
import { UserComponent } from './pages/user/user-list/user.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
