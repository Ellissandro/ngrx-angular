import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../posts/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getPosts(): Observable<Post[]> {
    return of([
      {
        id: '878',
        title: 'Sample Title 1',
        description: 'Sample Descrition 1',
      },
      {
        id: '425343',
        title: 'Sample Title 2',
        description: 'Sample Descrition 2',
      },
      {
        id: '6399',
        title: 'Sample Title 3',
        description: 'Sample Descrition 3',
      },
    ]);
  }

  addPost(post: Post): Observable<Post> {
    return of({
      ...post,
      id: Math.floor(Math.random() * 10000000).toString(),
    });
  }

  updatePost(post: Post): Observable<Post> {
    return of({
      ...post,
    });
  }

  deletePost(id: string | undefined): Observable<string | undefined> {
    return of(id);
  }
}
