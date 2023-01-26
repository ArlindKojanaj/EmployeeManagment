import {Component, OnInit} from '@angular/core';
import {KeycloakProfile} from 'keycloak-js';
import {KeycloakEvent, KeycloakService} from 'keycloak-angular';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  userDetails!: KeycloakProfile;
  roles!: string[];
  helper = new JwtHelperService();
  decodedToken: any;
  decodedRefreshToken: any;
  extraroles!: string[];
  token!: string;
  expirationDate: any;
  refreshToken: string | undefined;
  events: string[] = [];


  // url = 'https://timbrature-panta.coopservice.cloud/api/v1/timbrature';

  constructor(private keycloakService: KeycloakService,
              private httpClient: HttpClient) {
                this.refreshToken = '';
    this.keycloakService.keycloakEvents$.subscribe(this.eventHandling.bind(this));
  }

  eventHandling(event: KeycloakEvent) {
    console.log('KeycloakEvent: ' + event.type);
    this.refreshKeycloak();
    switch (event.type) {
      case 0:
        console.log('OnAuthError');
        this.events.push('OnAuthError');
        break;
      case 1:
        console.log('OnAuthLogout');
        this.events.push('OnAuthLogout');
        break;
      case 2:
        console.log('OnAuthRefreshError');
        this.events.push('OnAuthRefreshError');
        break;
      case 3:
        console.log('OnAuthRefreshSuccess');
        this.events.push('OnAuthRefreshSuccess');
        break;
      case 4:
        console.log('OnAuthSuccess');
        this.events.push('OnAuthSuccess');
        break;
      case 5:
        console.log('OnReady');
        this.events.push('OnReady');
        break;
      case 6:
        console.log('OnTokenExpired');
        this.events.push('OnTokenExpired');
        break;
    }
  }

  ngOnInit() {
    this.refreshKeycloak();
  }


  async refreshKeycloak() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
      this.roles = this.keycloakService.getUserRoles();
      this.keycloakService.getToken().then(
        token => {
          this.token = token;
          this.decodedToken = this.helper.decodeToken(token);
          // Other functions
          this.expirationDate = this.helper.getTokenExpirationDate(token);
          this.extraroles = this.decodedToken.extraroles;
        });
      this.refreshToken = this.checkRefreshToken();
      this.decodedRefreshToken = this.helper.decodeToken(this.refreshToken);
    }
  }

  checkRefreshToken(): string {
    if (this.keycloakService.getKeycloakInstance().refreshToken) {
      return `${this.keycloakService.getKeycloakInstance().refreshToken}`;
    } else {
      return '';
    }
  }

  async doLogout() {
    await this.keycloakService.logout();
  }
}