import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../posts.model';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$?: Observable<Post[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  onDeletePost(id: string | undefined) {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({ id }))
    }
  }
}
