import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
