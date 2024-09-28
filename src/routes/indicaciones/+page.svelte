<script lang="ts">
  import { goto } from "$app/navigation";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
</script>

<svelte:head>
  <title>Indicaciones</title>
  <meta
    name="description"
    content="Indicaciones | Calendario de Adviento 2024 | Vianney"
  />
</svelte:head>

<!-- 'CASA' TEXTURE -->
<div
  class="z-10 w-full h-full absolute inner-div box-border overflow-y-hidden bg-cover bg-no-repeat"
  style="background-image: url('/images/FONDOS/CASA.webp'); float: left; background-size: 100vw; background-size: cover; background-position: center;"
/>

<!-- BACKGROUND TEXTURE -->
<div
  class="z-20 w-full h-full absolute inner-div box-border overflow-y-hidden bg-cover opacity-90"
  style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
/>

<div
  class="z-30 flex flex-col w-full h-fit bottom-3 items-center md:absolute md:mb-20"
>
  <!-- HEADER & LOGO -->
  <HeaderAndLogo />

  <p class="mt-5 mb-3 text-agreen f7-ivy">¿Cómo funciona?</p>

  <!-- STEPS TUTORIAL -->
  <div
    class="w-full text-ared f10-latino grid grid-cols-2 grid-rows-2 justify-center md:flex md:space-x-6"
  >
    <!-- STEP 1 -->
    <div class="flex flex-col items-center">
      <div class="w-16 h-16 md:w-28 md:h-28">
        <img
          class="w-full h-full object-contain"
          alt="step-1"
          src="/images/ELEMENTOS/CALENDARIO.webp"
        />
      </div>

      <div>
        <p>
          1. Accede<br />diariamente del
          <span class="f9-latino">1 al<br />25 de Diciembre.</span>
        </p>
      </div>
    </div>

    <!-- STEP 2 -->
    <div class="flex flex-col items-center">
      <div class="w-16 h-16 md:w-28 md:h-28 relative">
        <img
          class="w-full h-full object-contain"
          alt="step-2"
          src="/images/ELEMENTOS/VENTANA CALENDARIO.webp"
        />

        <div class="w-12 h-12 absolute bottom-0 right-0">
          <img
            class="object-contain"
            alt="step-2"
            src="/images/ELEMENTOS/CLIC.webp"
          />
        </div>
      </div>

      <div>
        <p>
          2. Da clic <span class="f9-latino"
            >en la<br />ventana con el<br />número
          </span>
          de día<br />correspondiente.
        </p>
      </div>
    </div>

    <!-- STEP 3 -->
    <div class="flex flex-col items-center">
      <div class="w-16 h-16 md:w-28 md:h-28">
        <img
          class="w-full h-full object-contain"
          alt="step-3"
          src="/images/ELEMENTOS/PINO.webp"
        />
      </div>

      <p>
        3. Deberás <span class="f9-latino">realizar<br />la buena acción </span>
        del<br />día que se indique.
      </p>
    </div>

    <!-- STEP 4 -->
    <div class="flex flex-col items-center">
      <div class="w-16 h-16 md:w-28 md:h-28 relative">
        <img
          class="w-full h-full object-contain"
          alt="step-4"
          src="/images/ELEMENTOS/VENTANA CALENDARIO.webp"
        />

        <div
          class="w-10 h-10 md:w-16 md:h-16 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <img
            class="object-contain"
            alt="step-4"
            src="/images/ELEMENTOS/ESTRELLA.webp"
          />
        </div>
      </div>

      <p>
        4. <span class="f9-latino">Regresa al día<br />siguiente, </span>
        se marcará<br />automáticamente<br />con una estrella lo<br />que ya
        realizaste.
      </p>
    </div>
  </div>
</div>

<!-- NEXT BUTTON -->
<NextButton nextRoute="/inicio" />
