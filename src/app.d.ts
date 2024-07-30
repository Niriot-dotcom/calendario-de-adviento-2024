// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// Declaramos el módulo '*.svelte' con los miembros exportados
declare module "*.svelte" {
  export { SvelteComponentDev as default } from "svelte/internal";
  export const getBoundingClientRect: (element: Element) => DOMRect;
  // ... otros miembros exportados
}

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

// tailwind css 1px gray border classes are:
// border border-gray-300

export {};
