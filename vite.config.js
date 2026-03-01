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

import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import tailwindcss from "@tailwindcss/vite";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [
		tailwindcss(),

		viteImagemin({
			plugins: {
				png: imageminPngquant({
					quality: [0.2, 0.85], // ← Lower min to 0.5 (or even 0.4–0.6) for more aggressive compression
					//   0.85 max keeps good detail on nails/chrome/glitter
					speed: 1, // ← 1 = slowest/best compression (worth it for build — not dev)
					strip: true, // Remove metadata (EXIF, etc.) — safe & saves a bit
					// dithering: 0.75,     // Uncomment if colors look banded after compression (smooths gradients)
				}),

				svg: imageminSvgo({
					plugins: [{ name: "removeViewBox", active: false }],
				}),
			},

			include: [/\.(png|svg)$/i],
			cache: true,
			verbose: true, // ← Keep this — shows detailed logs next build
			// uncomment to see compression stats in terminal
		}),
	],

	base: "/pro_nails/",
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},

	build: {
		minify: "esbuild", // default anyway — good for JS/CSS
		// chunkSizeWarningLimit: 800,   // optional
	},
});
