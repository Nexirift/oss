import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/plugin-keycloak": "https://github.com/Nexirift/plugin-keycloak",
		"/plugin-keycloak-example": "https://github.com/Nexirift/plugin-keycloak-example",
		"/spark": "https://github.com/Nexirift/spark"
	},
});
