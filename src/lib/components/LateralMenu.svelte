<script lang="ts">
  import { AuthHandlers } from "../../stores/AuthStore";
  import CalendarioAdvientoPDF from "$lib/assets/CALENDARIO_ADVIENTO.pdf";
  import ColoreablesPDF from "$lib/assets/COLOREABLES.pdf";
  import * as Popover from "$lib/components/ui/popover";

  function handleCloseSesion() {
    window.location.href = "/";
    AuthHandlers.logout();
  }
</script>

<Popover.Root>
  <Popover.Trigger
    class="z-50 absolute top-[2vw] left-[2vw] md:top-[2vh] md:left-[2vh] w-[8vw] h-[8vw] md:w-[8vh] md:h-[8vh] cursor-pointer"
  >
    <img
      class="w-full h-full object-cover cursor-pointer"
      alt="ICONO MENU"
      src="/images/ICONOS/MENU.webp"
    />
  </Popover.Trigger>
  <Popover.Content
    class="z-0 ml-6 mt-3 rounded-xl absolute top-0 left-0 bg-white w-fit md:w-56 lg:w-96 text-ared"
  >
    <!-- DESCARGA -->
    <div class="text-left ml-2 md:ml-1 mt-5 md:mt-1 mb-5">
      <p class="f7-ivy">Descargables</p>

      <div class="">
        <a
          download="CALENDARIO_ADVIENTO.pdf"
          target="_blank"
          href={CalendarioAdvientoPDF}
          class="flex space-x-2 items-center mb-1"
        >
          <img
            class="w-fit h-3 md:w-4 md:h-4 lg:w-8 lg:h-8 object-cover cursor-pointer"
            alt="ICONO DESCARGAR"
            src="/images/ICONOS/DESCARGAR.webp"
          />
          <p class="f9-latino">Descargar calendario PDF</p>
        </a>

        <a
          download="COLOREABLES.pdf"
          target="_blank"
          href={ColoreablesPDF}
          class="flex space-x-2 items-center"
        >
          <img
            class="w-fit h-3 md:w-4 md:h-4 lg:w-8 lg:h-8 object-cover cursor-pointer"
            alt="ICONO DESCARGAR"
            src="/images/ICONOS/DESCARGAR.webp"
          />
          <p class="f9-latino">Descargar coloreables</p>
        </a>
      </div>
    </div>

    <!-- TUTORIAL -->
    <div class="text-left ml-2 md:ml-1 mt-5 md:mt-1 mb-5">
      <p class="f7-ivy">Tutorial</p>

      <Popover.Close>
        <a href="/inicio/tutorial" class="flex space-x-2 items-center">
          <img
            class="w-fit h-3 md:w-4 md:h-4 lg:w-8 lg:h-8 object-cover cursor-pointer"
            alt="ICONO PLAY"
            src="/images/ICONOS/TUTORIAL.webp"
          />
          <p class="leading-none f9-latino text-left">
            Guardado en pantalla<br />de inicio iOS y Android
          </p>
        </a>
      </Popover.Close>
    </div>

    <Popover.Close
      on:click={handleCloseSesion}
      class="z-50 f9-latino w-full mb-5 rounded-xl border border-ared mt-5 px-3 py-1 hover:text-white hover:bg-ared transition-all ease-linear duration-200"
    >
      CERRAR SESIÓN
    </Popover.Close>
  </Popover.Content>
</Popover.Root>
