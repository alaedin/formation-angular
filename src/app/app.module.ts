import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {FaceSnapsModule} from "./face-snaps/face-snaps.module";
import {LandingPageComponent} from "./landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    FaceSnapsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
