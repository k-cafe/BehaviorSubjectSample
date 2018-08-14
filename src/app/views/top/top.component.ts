import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  user: User;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.userService.cast.subscribe(user => {
      this.user = user;
    });
  }

  onClickToConfirm(event) {
    event.preventDefault();
    this.userService.broadcast(this.user);
    this.router.navigate(['confirm']);
  }

}
