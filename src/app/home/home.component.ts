import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData : IUser[] = [];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => this.userData = data
    )
  }

}
