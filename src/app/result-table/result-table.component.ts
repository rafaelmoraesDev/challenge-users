import { Component, OnInit } from '@angular/core';

import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  users: any;
  constructor(private service: UsersService) {
  }

  ngOnInit(): void {
    // this.users.getList();
    this.users = this.service.list();
  }

}
