import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email!: string;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/face-snap')
  }
}
