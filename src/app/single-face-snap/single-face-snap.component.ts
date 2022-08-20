import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../model/FaceSnap";
import {FaceSnapsService} from "../services/faceSnaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>;
  snapButton!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.snapButton = 'Oh Snap!';
    const snapFaceId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnap(snapFaceId);
  }

  onSnap(faceSnapId : number) {
    if (this.snapButton === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapService.snapById(faceSnapId, 'snap').pipe(
        tap(()=>{
          this.snapButton = 'Oops unSnap!'
        })
      );

    } else {
      this.faceSnap$ = this.faceSnapService.snapById(faceSnapId, 'unsnap').pipe(
        tap(()=>{
          this.snapButton = 'Oh Snap!';
        })
      );
    }
  }

}
