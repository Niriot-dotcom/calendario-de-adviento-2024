<script lang="ts">
  let toggleMenu: boolean = false;

  function handleToggleMenu(event: any) {
    event.preventDefault();
    toggleMenu = !toggleMenu;
  }
</script>

<button
  on:click={handleToggleMenu}
  class="z-50 absolute top-5 left-5 w-12 h-12 cursor-pointer"
>
  <img
    class="w-full h-full object-cover cursor-pointer"
    alt="ICONO MENU"
    src="/images/ICONOS/MENU.webp"
  />
</button>

{#if toggleMenu}
  <div
    class="z-40 m-3 rounded-xl absolute top-0 left-0 bg-white w-72 text-ared"
  >
    <!-- DESCARGA -->
    <div class="text-left ml-5 mt-20">
      <p class="text-agreen font-ivy text-3xl">Descargables</p>

      <div>
        <div class="flex space-x-2 items-center">
          <img
            class="w-5 h-5 object-cover cursor-pointer"
            alt="ICONO DESCARGAR"
            src="/images/ICONOS/DESCARGAR.webp"
          />
          <p>Descargar calendario</p>
        </div>

        <div class="flex space-x-2 items-center">
          <img
            class="w-5 h-5 object-cover cursor-pointer"
            alt="ICONO DESCARGAR"
            src="/images/ICONOS/DESCARGAR.webp"
          />
          <p>Descargar coloreables</p>
        </div>
      </div>
    </div>

    <!-- TUTORIAL -->
    <div class="text-left ml-5 my-5">
      <p class="text-agreen font-ivy text-3xl">Tutorial</p>

      <a href="/tutorial" class="flex space-x-2 items-center">
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

    <button
      class="z-50 mb-20 rounded-xl border border-ared mt-5 px-3 py-1 cursor-pointer hover:text-white hover:bg-ared"
    >
      CERRAR SESIÓN
    </button>
  </div>
{/if}
