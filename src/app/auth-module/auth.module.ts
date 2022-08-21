import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../core/services/AuthService";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,

  ],

})
export class AuthModule {
}
