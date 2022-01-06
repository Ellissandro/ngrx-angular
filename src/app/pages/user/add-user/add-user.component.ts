import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  @Output() onAddUser = new EventEmitter<User>()

  onSubmit(f: NgForm) {
    this.onAddUser.emit(f.value);
    f.reset();
  }
}
