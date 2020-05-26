import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/user/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private readonly userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.currentUserSubject.subscribe(user => this.loggedIn = !!user)
  }
}
