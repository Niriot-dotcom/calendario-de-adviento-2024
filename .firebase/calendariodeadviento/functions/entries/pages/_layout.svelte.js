import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-ryz6u7_START --><link rel="preconnect" href="https://fonts.gstatic.com"><link rel="stylesheet" href="https://rsms.me/inter/inter.css"><link rel="stylesheet" href="https://use.typekit.net/mmk2zvp.css"><meta property="og:image" content="/images/share-image.png"><!-- HEAD_svelte-ryz6u7_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
