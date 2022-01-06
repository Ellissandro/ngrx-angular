import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { PostsComponent } from './pages/posts/posts-list/posts.component';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './pages/posts/add-post/add-post.component';
import { EditPostComponent } from './pages/posts/edit-post/edit-post.component';
import { UserComponent } from './pages/user/user-list/user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostsComponent,
    AddPostComponent,
    EditPostComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
