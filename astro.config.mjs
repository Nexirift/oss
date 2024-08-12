import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/plugin-keycloak": "https://github.com/Nexirift/plugin-keycloak",
    "/plugin-keycloak-example":
      "https://github.com/Nexirift/plugin-keycloak-example",
    "/plugin-oidc": "https://github.com/Nexirift/plugin-oidc",
    "/plugin-oidc-example": "https://github.com/Nexirift/plugin-oidc-example",
    "/spark": "https://github.com/Nexirift/spark",
  },
});
