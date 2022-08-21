import {Injectable} from "@angular/core";
import {FaceSnap} from "../model/FaceSnap";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private httpClient: HttpClient) {
  }

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

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getAllSnaps().pipe(
      map(faceSnaps => faceSnaps.reduce((a, b) => a.id < b.id ? b : a)),
      tap(faceSnap => console.log('faceSnap is : '+ JSON.stringify(faceSnap))),
      map(faceSnap => ({
        ...formValue,
        createdDate: new Date(),
        id: faceSnap.id + 1,
        snap: 0,
      })),
      switchMap(newFaceSnap=>this.httpClient.post<FaceSnap>(`http://localhost:3000/facesnaps`, newFaceSnap))
    );
  }

}
