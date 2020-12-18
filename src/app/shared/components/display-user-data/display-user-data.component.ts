import { UserDataService } from './../../services/user-data.service';
import { User } from './../model/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss'],
})
export class DisplayUserDataComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSub: Subscription;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.currentUserSub = this.userDataService.currentUserData$.subscribe(
      (val) => {
        this.currentUser = val;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.currentUserSub) {
      this.currentUserSub.unsubscribe();
    }
  }
}
