import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../core/model/FaceSnap";
import {FaceSnapsService} from "../core/services/faceSnaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapsService,
              private route: Router) {
  }

  ngOnInit() {
  }


  onViewFaceSnap() {

    this.route.navigateByUrl(`face-snaps/${ this.faceSnap.id}`);

  }
}
