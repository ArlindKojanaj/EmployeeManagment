
import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:3887',
          realm: 'basecom',
          clientId: 'empman-fe',
        },
        initOptions: {
            checkLoginIframe: false,
            checkLoginIframeInterval: 10,
            onLoad: 'login-required',
        }
      });
}