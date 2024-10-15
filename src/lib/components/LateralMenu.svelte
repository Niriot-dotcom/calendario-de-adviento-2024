<script lang="ts">
  import { AuthHandlers } from "../../stores/AuthStore";
  import CalendarioAdvientoPDF from "$lib/assets/CALENDARIO_ADVIENTO.pdf";
  import ColoreablesPDF from "$lib/assets/COLOREABLES.pdf";
  import * as Popover from "$lib/components/ui/popover";
</script>

<Popover.Root>
  <Popover.Trigger class="z-50 absolute top-5 left-5 w-12 h-12 cursor-pointer">
    <img
      class="w-full h-full object-cover cursor-pointer"
      alt="ICONO MENU"
      src="/images/ICONOS/MENU.webp"
    />
  </Popover.Trigger>
  <Popover.Content
    class="z-0 ml-6 mt-3 rounded-xl absolute top-0 left-0 bg-white w-72 text-ared"
  >
    <!-- DESCARGA -->
    <div class="text-left ml-5 mt-5">
      <p class="text-agreen f7-ivy">Descargables</p>

      <div>
        <a
          download="CALENDARIO_ADVIENTO.pdf"
          target="_blank"
          href={CalendarioAdvientoPDF}
          class="flex space-x-2 items-center"
        >
          <img
            class="w-5 h-5 object-cover cursor-pointer"
            alt="ICONO DESCARGAR"
            src="/images/ICONOS/DESCARGAR.webp"
          />
          <p>Descargar calendario PDF</p>
        </a>

        <a
          download="COLOREABLES.pdf"
          target="_blank"
          href={ColoreablesPDF}
          class="flex space-x-2 items-center"
        >
          <img
            class="w-5 h-5 object-cover cursor-pointer"
            alt="ICONO DESCARGAR"
            src="/images/ICONOS/DESCARGAR.webp"
          />
          <p>Descargar coloreables</p>
        </a>
      </div>
    </div>

    <!-- TUTORIAL -->
    <div class="text-left ml-5 my-5">
      <p class="text-agreen f7-ivy">Tutorial</p>

      <a href="/inicio/tutorial" class="flex space-x-2 items-center">
        <img
          class="w-5 h-5 object-cover cursor-pointer"
          alt="ICONO DESCARGAR"
          src="/images/ICONOS/TUTORIAL.webp"
        />
        <p class="leading-none">
          Guardado en pantalla<br />de inicio iOS y Android
        </p>
      </a>
    </div>

    <Popover.Close
      on:click={AuthHandlers.logout}
      class="z-50 w-full mb-5 rounded-xl border border-ared mt-5 px-3 py-1 cursor-pointer hover:text-white hover:bg-ared transition-all ease-linear duration-200"
    >
      CERRAR SESIÓN
    </Popover.Close>
  </Popover.Content>
</Popover.Root>
