import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './sso.config';
@Injectable()
export class UtilityService {
  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn();
  }
  TestingFunction() {
    return this.oauthService;
  }

  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    console.log('First');
    console.log(this.oauthService);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  public login(): void {
    this.oauthService.initLoginFlow();
  }
  get token() {
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
  logout() {
    this.oauthService.logOut();
  }
}
