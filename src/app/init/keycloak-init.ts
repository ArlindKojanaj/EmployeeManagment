
import { KeycloakService } from "keycloak-angular";
import { environment, keycloakConfig } from "src/environments/environment";

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