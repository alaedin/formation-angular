import {Injectable} from "@angular/core";
import {FaceSnap} from "../model/FaceSnap";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private httpClient: HttpClient) {}

  getAllSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnap(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snap: faceSnap.snap + (snapType === 'snap' ? +1 : -1)
      })),
      switchMap(updatedFaceSnap =>
        this.httpClient.patch<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
    )
  }

  getFaceSnap(faceSnapId: number): Observable<FaceSnap> {
    return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
    /*     const faceSnap: FaceSnap = {
           ...formValue,
           createdDate: new Date(),
           id: Math.max(...this.faceSnaps.map(value => value.id)),
           snap: 0,
         }
         this.faceSnaps.push(faceSnap);*/
  }

}
