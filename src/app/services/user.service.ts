import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<User>;
  cast: Observable<User>;

  constructor() {
    // BehaviorSubjectはObservableとObserverをもつ
    // ServiceにBehaviorSubjectをもち、それをObserbavleとしてコンポーネントでsubscribeすると
    // データ共有が可能
    // それは、BehaviorSubjectの持つマルチキャスト性のため
    this.user = new BehaviorSubject(new User());
    this.cast = this.user.asObservable();
   }

  broadcast(user: User) {
    this.user.next(user);
  }
}
