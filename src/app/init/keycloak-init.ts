
import { environment, keycloakConfig } from "environment";
import { KeycloakService } from "keycloak-angular";

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init(
    {
      config: keycloakConfig,
      initOptions: {
        checkLoginIframe: false
      },
      bearerExcludedUrls: ['assets/config.json']
    }).then(auth => {
    if (!auth) {
      keycloak.login({
        scope: environment.scope,
      });
    }
  });
}