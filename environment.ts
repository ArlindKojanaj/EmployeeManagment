import { KeycloakConfig } from "keycloak-js";

// Add here your keycloak setup infos
export const keycloakConfig: KeycloakConfig = {
  url: 'https://sso.n-ess.it/auth',
  realm: 'lab',
  clientId: 'empman-ui-ng'
};


export const environment = {
  production: false,
  keycloakConfig,
  scope: 'openid'
};