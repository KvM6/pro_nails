// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
// 	plugins: [tailwindcss()],
// 	base: "/pro_nails/",
// 	resolve: {
// 		alias: {
// 			"@": path.resolve(__dirname, "src"),
// 		},
// 	},
// });

import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import tailwindcss from "@tailwindcss/vite";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
		plugins: [tailwindcss()],
  base: '/portfolioPageTwo/', // your repo name
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})