import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../model/FaceSnap";
import {FaceSnapsService} from "../services/faceSnaps.service";
import {interval, take, tap} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllSnaps();

    interval(1000).pipe(
      take(1),
      tap(console.log)
    ).subscribe();
  }

}
