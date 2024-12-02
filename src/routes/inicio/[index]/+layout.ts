import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const zonaHorariaUsuario = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const accessDay = parseInt(params.index);
  const response = await fetch(
    `https://timeapi.io/api/time/current/zone?timeZone=${zonaHorariaUsuario}`,
    { headers: { Accept: "application/json" } }
  );

  // if (!response.ok) {
  //   throw error(500, "Error al obtener la fecha del servidor");
  // }

  const data = await response.json();
  // const fechaActual = data.utc_datetime; // Usamos la hora UTC de la API

  const fechaActual = new Date(data.dateTime); // Usamos la hora local de la API
  const diaActual = fechaActual.getDate(); // Día actual del mes
  const mesActual = fechaActual.getMonth(); // Mes actual (11 = diciembre)

  // Si no estamos en diciembre o el día solicitado es mayor que el actual, bloqueamos el acceso
  if (mesActual !== 11 || accessDay > diaActual) {
    // Redirigir al inicio si se accede a una fecha futura
    throw redirect(303, "/inicio"); // Redirige a la página principal de /inicio
    // O lanzar un error si prefieres mostrar un mensaje de error
    // throw error(403, 'No puedes acceder a esta página.');
  }

  return { accessDay };
}
