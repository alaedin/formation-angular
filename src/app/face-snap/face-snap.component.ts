import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../model/FaceSnap";
import {FaceSnapsService} from "../services/faceSnaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  snapButton!: string;

  constructor(private faceSnapService: FaceSnapsService) {
  }

  ngOnInit() {
    this.snapButton = 'Oh Snap!';
  }

  onSnap() {
    if (this.snapButton === 'Oh Snap!') {
      this.faceSnapService.snapById(this.faceSnap.id,'snap');
      this.snapButton = 'Oops unSnap!'
    } else {
      this.faceSnapService.snapById(this.faceSnap.id,'unsnap');
      this.snapButton = 'Oh Snap!';
    }
  }


}
