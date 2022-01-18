import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../posts.model';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post?: Post;
  postSubscription: Subscription;
  postForm: FormGroup;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    this.createForm();
    this.postSubscription = this.store.select(getPostById).subscribe((post) => {
      if (post) {
        this.post = post;
        this.postForm.patchValue({
          title: post?.title,
          description: post?.description,
        });
      }
    });
  }

  createForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post?.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  showErros(name: string, control: string): string {
    const formControl = this.postForm.get(control);

    if (formControl?.touched && !formControl.valid) {
      if (formControl.errors?.required) {
        return `${name} is required`;
      }

      if (formControl.errors?.minlength) {
        return `${name} should be minimum 6 characters`;
      }
    }

    return '';
  }

  onUpdatePost(): void {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      id: this.post?.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
