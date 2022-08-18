import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../model/FaceSnap";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  snapButton!: string;

  ngOnInit() {
    this.snapButton = 'Oh Snap!';
  }

  onSnap() {
    if (this.snapButton === 'Oh Snap!') {
      this.faceSnap.snap++;
      this.snapButton = 'Oops on Snap!'
    } else {
      this.faceSnap.snap--;
      this.snapButton = 'Oh Snap!';
    }
  }


}
