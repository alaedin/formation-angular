import {Injectable} from "@angular/core";
import {FaceSnap} from "../model/FaceSnap";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private httpClient: HttpClient) {}

  faceSnaps: FaceSnap[] = [];

  getAllSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnap(faceSnapId);
    snapType === 'snap' ? faceSnap.snap++ : faceSnap.snap--;
  }

  getFaceSnap(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error("faceSnap not found!");
    }
    return faceSnap;
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      id: Math.max(...this.faceSnaps.map(value => value.id)),
      snap: 0,
    }
    this.faceSnaps.push(faceSnap);
  }

}
