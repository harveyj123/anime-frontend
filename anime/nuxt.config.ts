// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
<<<<<<< Updated upstream
	plugins: [
		"~/plugins/auth.ts",
		// "~/plugins/pinia.ts"
	],
	css: [
		// CSS file in the project
		'~/assets/global.css',
	],

	runtimeConfig: {
		public: {
			clientID: process.env.CLIENT_ID,
		},
	},
	// buildModules: [],
	dir: {
		pages: "pages",
	},
	modules: [
		// ...
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
	],
	nitro: {
		compressPublicAssets: true,
	},
=======
    // srcDir: "src/",
    components: ["~/src/components"],
    plugins: [
        "~/plugins/auth.ts",
        // "~/plugins/pinia.ts"
    ],

    runtimeConfig: {
        public: {
            clientID: process.env.CLIENT_ID,
        },
    },
    // buildModules: [],
    dir: {
        // Rename `pages` directory to `routes`
        pages: "routes",
    },
    modules: [
        // ...
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
    ],
    nitro: {
        compressPublicAssets: true,
    },
>>>>>>> Stashed changes
});
