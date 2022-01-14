import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AddUserComponent } from './add-user/add-user.component';
import { userReducer } from './state/user.reducers';
import { USER_STATE_NAME } from './state/user.selector';
import { UserComponent } from './user-list/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [UserComponent, AddUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(USER_STATE_NAME, userReducer),
  ],
})
export class UserModule {}
