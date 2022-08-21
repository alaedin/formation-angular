import {CoreModule} from "./core/core.module";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth-module/auth.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    AuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
