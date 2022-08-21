import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/model/FaceSnap";
import {FaceSnapsService} from "../../../core/services/faceSnaps.service";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllSnaps();
  }
}
