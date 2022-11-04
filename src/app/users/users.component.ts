import { Component, OnInit } from '@angular/core';

import { UsersService } from './../services/users.service';
import { User } from './model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  displayColumns = ["_id", "username", "password", "is_enabled", "data_register", "name", "surname", "email", "phone"];

  constructor(private usersService: UsersService) { }

  async ngOnInit(): Promise<void> {
    const users = await this.usersService.list();
    this.users = users;
  }


}
