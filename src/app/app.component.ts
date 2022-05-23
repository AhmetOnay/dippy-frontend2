import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './sso.config';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dippy';
  constructor(private util: UtilityService) {}

  public login(): void {
    this.util.login();
  }

  get token() {
    return this.util.token();
  }
  logout() {
    this.util.logout();
  }
}
