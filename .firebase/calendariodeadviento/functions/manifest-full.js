export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fonts/OoohBaby-Regular.ttf","images/.DS_Store","images/ELEMENTOS/.DS_Store","images/ELEMENTOS/CALENDARIO.webp","images/ELEMENTOS/CLIC.webp","images/ELEMENTOS/ESTRELLA.webp","images/ELEMENTOS/FLECHA.webp","images/ELEMENTOS/LOGO-BLANCO.webp","images/ELEMENTOS/LOGO-MORADO.webp","images/ELEMENTOS/PINO.webp","images/ELEMENTOS/VENTANA CALENDARIO.webp","images/favicon.png","images/FONDOS/CASA.webp","images/FONDOS/FONDO.webp","images/ICONOS/DESCARGAR.webp","images/ICONOS/email.webp","images/ICONOS/facebook.png","images/ICONOS/google.webp","images/ICONOS/MENU.webp","images/ICONOS/TUTORIAL.webp","images/ICONOS/whatsapp.png","images/PERSONAJES/ANGELITA.webp","images/PERSONAJES/ANGELITO.webp","images/PERSONAJES/GALLETA.webp","images/PERSONAJES/GNOMO.webp","images/PERSONAJES/OSITO.webp","images/PERSONAJES/PINGUINO-1.webp","images/PERSONAJES/PINGUINO-2.webp","images/PERSONAJES/RENO.webp","images/PERSONAJES/SANTA-CLAUS.webp"]),
	mimeTypes: {".ttf":"font/ttf",".webp":"image/webp",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.3istS8dZ.js","app":"_app/immutable/entry/app.RNZ3vAFA.js","imports":["_app/immutable/entry/start.3istS8dZ.js","_app/immutable/chunks/entry.DD6SSO0V.js","_app/immutable/chunks/scheduler.osMZMnpW.js","_app/immutable/chunks/index.s0YT6PK7.js","_app/immutable/entry/app.RNZ3vAFA.js","_app/immutable/chunks/scheduler.osMZMnpW.js","_app/immutable/chunks/index.CEhxVOsg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
