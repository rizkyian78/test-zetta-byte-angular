import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransfereService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data: any) {
    // we can do stuff with data if we want
    this.myMethodSubject.next(data);
  }
}
