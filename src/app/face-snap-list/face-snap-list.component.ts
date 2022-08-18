import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../model/FaceSnap";
import {FaceSnapsService} from "../services/faceSnaps.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapServie: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapServie.faceSnaps;

  }

}
