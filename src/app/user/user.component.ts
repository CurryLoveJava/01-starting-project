import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*
  老版本 user 内容
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  */
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() selecte = new EventEmitter();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.selecte.emit(this.user.id);
  }
}