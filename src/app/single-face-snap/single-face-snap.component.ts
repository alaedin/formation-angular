import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../model/FaceSnap";
import {FaceSnapsService} from "../services/faceSnaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  snapButton!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.snapButton = 'Oh Snap!';
    const snapFaceId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnap(snapFaceId);
  }

  onSnap() {
    if (this.snapButton === 'Oh Snap!') {
      this.faceSnapService.snapById(this.faceSnap.id, 'snap');
      this.snapButton = 'Oops unSnap!'
    } else {
      this.faceSnapService.snapById(this.faceSnap.id, 'unsnap');
      this.snapButton = 'Oh Snap!';
    }
  }

}
