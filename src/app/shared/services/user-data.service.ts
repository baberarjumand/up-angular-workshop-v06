import { User } from './../components/model/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private currentUserDataSource = new BehaviorSubject<User>({
    name: 'Initial01',
    email: 'initial01@abc.com',
  });

  currentUserData$ = this.currentUserDataSource.asObservable();

  constructor() {}

  updateCurrentUser(newUserObj: User): void {
    this.currentUserDataSource.next(newUserObj);
  }
}
