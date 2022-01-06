import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../posts.model';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
    })
  }


  showErros(name: string, control: string) {
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

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }

    this.store.dispatch(addPost({ post }));
  }
}

