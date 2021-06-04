import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from 'src/app/models/User';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
this.userService.getUser().subscribe(value => {
  this.users = value
})
  }

}
