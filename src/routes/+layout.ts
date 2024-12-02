// import type { LayoutLoad } from "./$types";

// export const load = (async ({ url }) => {
//   return { url: url.pathname };
// }) satisfies LayoutLoad;

import type { LayoutServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = async () => {
  const zonaHorariaUsuario = Intl.DateTimeFormat().resolvedOptions().timeZone;

  try {
    // `http://worldtimeapi.org/api/timezone/${zonaHorariaUsuario}`
    const response = await fetch(
      `https://timeapi.io/api/time/current/zone?timeZone=${zonaHorariaUsuario}`,
      { headers: { Accept: "application/json" } }
    );

    if (!response.ok) {
      throw error(500, "Error al obtener la fecha del servidor");
    }

    const data = await response.json();
    // const currentDate = data.utc_datetime; // Usamos la hora UTC de la API
    const currentDate = data.dateTime; // Usamos la hora local de la API

    return { currentDate };
  } catch (err) {
    console.error("catch Error al obtener la fecha:", err);
    throw error(500, "Error al obtener la fecha del servidor");
  }
};
