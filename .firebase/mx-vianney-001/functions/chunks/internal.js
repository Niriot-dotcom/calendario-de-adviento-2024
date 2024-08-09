import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
function set_read_implementation(fn) {
}
function set_manifest(_) {
}
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="es" data-wf-site="643738a971c1d64a8bd7a90a">\n\n<head>\n  <meta charset="utf-8" />\n  <title>Calendario de Adviento 2024 | Vianney</title>\n  <meta content="Catálogos Web Vianney" property="og:title" />\n  <meta content="Catálogos Web Vianney" property="twitter:title" />\n  <meta content="width=device-width, initial-scale=1" name="viewport" />\n  <meta property="og:image" content="/images/share-image.png">\n\n  <!-- FONTS -->\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="https://use.typekit.net/pup7drq.css">\n\n  <script src="https://use.typekit.net/xya1lyx.js" type="text/javascript"><\/script>\n\n  <script type="text/javascript">\n    try {\n      Typekit.load();\n    } catch (e) { }\n  <\/script>\n\n  <!-- TODO add favicon -->\n  <link href="../images/favicon.png" rel="shortcut icon" type="image/x-icon" />\n  <link href="../images/favicon.png" rel="apple-touch-icon" />\n\n  <link rel="stylesheet" href="https://unpkg.com/tippy.js@6/animations/scale.css" />\n  ' + head + '\n</head>\n\n<style>\n  ::-webkit-scrollbar {\n    width: 8px;\n    /* Adjust the width of the scrollbar here */\n  }\n\n  ::-webkit-scrollbar-track {\n    background: white;\n    /* Optional: style for the track */\n  }\n\n  /* For the handle */\n  ::-webkit-scrollbar-thumb {\n    background: rgb(156 163 175);\n    /* Optional: style for the handle */\n    border-radius: 8px;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgb(107 114 128);\n    /* Optional: style for the handle on hover */\n  }\n\n  /* Estilos existentes para el borde */\n  .borderDiv {\n    width: 100vw !important;\n    height: 100vh !important;\n    position: fixed;\n    border-radius: 30px;\n    z-index: 700;\n    pointer-events: none;\n    box-shadow:\n      0 0 0 12px white,\n      /* Outer white ring */\n      inset 0 0 0 8px white;\n    /* Inset white ring */\n  }\n\n  /* Consulta de medios para dispositivos móviles */\n  @media (max-width: 600px) {\n\n    /* Ajusta el 600px según tus necesidades */\n    .borderDiv {\n      box-shadow:\n        0 0 0 24px white,\n        /* Outer white ring */\n        inset 0 0 0 6px white;\n      /* Inset white ring */\n    }\n\n    .tippy-box {\n      display: none !important;\n    }\n  }\n</style>\n\n<!-- <div class="borderDiv"></div> -->\n\n<body style="max-width: 100vw; overflow-x: hidden !important" class="body-3">\n  <div>' + body + '</div>\n</body>\n<script>\n  document.addEventListener("DOMContentLoaded", function () {\n    var div = document.querySelector(".borderDiv");\n\n    // Verifica si estás en la página principal\n    if (\n      window.location.pathname === "/" ||\n      window.location.pathname === "/index.html"\n    ) {\n      div.style.display = "none"; // oculta el div\n    }\n  });\n<\/script>\n\n</html>',
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1pdho1q"
};
async function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_manifest as k,
  set_prerendering as l,
  set_read_implementation as m,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
