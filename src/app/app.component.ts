import {Component, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";
import {filter, map} from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;


  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        `the number ${value} is pair` :
        `the number ${value} is odd`
      )
    )
    ;

  }
}
