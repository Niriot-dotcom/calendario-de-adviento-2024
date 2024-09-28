<script lang="ts">
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
  import { buenasObras } from "$lib/constants/buenasObras";
  import NextButton from "./NextButton.svelte";

  export let BO_INDEX: number;
  export let openModal: boolean;

  function handleClose() {
    BO_INDEX = 0;
    openModal = false;
    window.location.reload();
  }
</script>

<div
  class="absolute top-0 left-0 z-[999] w-screen h-[100dvh] bg-no-repeat md:h-[100dvh] inner-div box-border overflow-hidden border-[12px] border-ared flex flex-col text-center items-center justify-center"
>
  <!-- BACKGROUND TEXTURE -->
  <div
    class="w-full h-[100dvh] md:h-[100dvh] absolute inner-div box-border overflow-y-hidden bg-cover opacity-90"
    style="background: url('/images/FONDOS/ESCENARIO_{BO_INDEX %
      2}.webp') no-repeat; float: left; background-size: 100vw; background-size: cover; background-position: center;"
  />

  <!-- LOGO -->
  <WhiteLogo />

  <!-- IMAGENES -->
  <div class="absolute z-0 flex w-full h-full items-center">
    <!-- PERSONAJE -->
    <div class="w-1/4 h-5/6 animate-bounce-smooth">
      <div class="w-full h-full flex items-end justify-end">
        <img
          class="h-4/6 object-contain"
          alt="ANGELITO"
          src="/images/PERSONAJES/{buenasObras[BO_INDEX - 1].personaje}.webp"
        />
      </div>
    </div>

    <!-- RECUADRO -->
    <div class="h-5/6 relative">
      <img
        class="w-full h-full object-cover"
        alt="GLOBO PERSONAJES"
        src="/images/ELEMENTOS/GLOBO PERSONAJES.webp"
      />

      <div
        class="absolute top-1/2 left-0 w-full h-full flex justify-center flex-col text-ared transform -translate-y-1/2"
      >
        <p class="f6-latino leading-none px-5">
          La buena acción<br />del día es:
        </p>
        <p class="f5-latino leading-none px-3">
          {buenasObras[BO_INDEX - 1].description}
        </p>
      </div>
    </div>

    <!-- GLOBO ANGELITA -->
    <div class="w-1/4 h-5/6 relative">
      <div class="w-full relative">
        <img
          class="w-full h-full object-contain"
          alt="GLOBO PERSONAJES"
          src="/images/ELEMENTOS/GLOBO ANGELITA.webp"
        />

        <div
          class="absolute top-8 left-0 w-full h-full flex flex-col text-ared px-5"
        >
          <p class="leading-none f6-latino">
            {@html buenasObras[BO_INDEX - 1].angelitaText}
          </p>
        </div>
      </div>
    </div>

    <!-- ANGELITA -->
    <div
      class="w-1/4 h-5/6 animate-bounce-smooth"
      style="animation-delay: 0.3s;"
    >
      <img
        class="w-5/6 h-full object-contain"
        alt="ANGELITA"
        src="/images/PERSONAJES/ANGELITA.webp"
      />
    </div>
  </div>

  <!-- NEXT BUTTON -->
  <NextButton {handleClose} />
</div>
