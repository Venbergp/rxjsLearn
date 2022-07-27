import { Component } from '@angular/core';
import {
  catchError,
  combineLatestWith,
  concat,
  from,
  interval,
  map,
  merge,
  Observable,
  of, switchMap, tap, throwError,
  timer,
  withLatestFrom,
  zipWith
} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  timer1$ : Observable<number> = timer(1000, 2000)
  timer2$ : Observable<number> = timer(2000, 3000)
  timer3$ : Observable<any> = timer(10000)
  title = 'rxjsLearn';

  list1$ : Observable<number> = of(1, 2, 3)
  list2$ : Observable<number> = of( 4, 5, 6)
  list3$ : Observable<number> = of(7, 8, 9)


  constructor() {
    let a : Observable<number>
    interval(1000)
      .pipe(
        switchMap(v => v === 5 ? throwError(()=>{}) : of(v)),
        catchError( err => {throw 'err'}),
      ).subscribe({
      next: console.log,
      error: console.log
    })


    // concat(
    //   this.list1$,
    //   this.list2$,
    //   this.list3$
    // ).subscribe(console.log)


    // merge(
    //   this.timer1$,
    //   this.timer2$,
    //   this.timer3$
    // ).subscribe(console.log)



  }

}
