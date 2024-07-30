// USING VERCEL
// import adapter from "@sveltejs/adapter-vercel";

// export default {
//   kit: {
//     adapter: adapter({
//       images: {
//         sizes: [500, 800, 896, 1080, 1280],
//         formats: ["image/webp"],
//         minimumCacheTTL: 300,
//         domains: ["catalogo2.vercel.app"],
//       },
//     }),
//   },
// };
////////////////////////////////////////////////////////////////

import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
};

export default config;
