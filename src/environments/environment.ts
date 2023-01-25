import { KeycloakConfig } from "keycloak-js";
import { RESOLVE_ENV } from "src/app/costants/functions";
import Config from '../config.json';


export const keycloakConfig: KeycloakConfig = {
  url: RESOLVE_ENV(Config.SSO_URL),
  realm: RESOLVE_ENV(Config.SSO_REALM),
  clientId: RESOLVE_ENV(Config.SSO_CLIENTID)
};

export const api = RESOLVE_ENV(Config.API_URL);

export const environment = {
  production: false,
  keycloakConfig,
  scope: 'openid'
};