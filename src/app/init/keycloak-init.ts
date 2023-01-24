
import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://172.17.0.1:3887',
          realm: 'basecom',
          clientId: 'empman-fe',
        },
        initOptions: {
          onLoad: 'login-required',
          redirectUri: window.location.origin + '/index.html',
        }
      });
}