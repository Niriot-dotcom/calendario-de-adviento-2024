

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BpsHcb3M.js","_app/immutable/chunks/scheduler.osMZMnpW.js","_app/immutable/chunks/index.CEhxVOsg.js","_app/immutable/chunks/index.s0YT6PK7.js"];
export const stylesheets = [];
export const fonts = [];
