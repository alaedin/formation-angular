import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
  {path: 'face-snap', loadChildren: () => import('./face-snap/face-snap.module').then(m => m.FaceSnapModule)},
  {path: '', component: LandingPageComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
