<script lang="ts">
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import LateralMenu from "$lib/components/LateralMenu.svelte";
</script>

<div
  class="w-screen h-screen bg-no-repeat md:h-screen inner-div box-border overflow-y-hidden relative border-[28px] border-ared flex flex-col text-center"
  style="background-image: url('/images/FONDOS/CASA.webp'); float: left; background-size: 100vw; background-size: cover; background-position: center;"
>
  <!-- BACKGROUND TEXTURE -->
  <div
    class="w-full h-[94vh] md:h-screen absolute inner-div box-border overflow-y-hidden bg-cover opacity-90"
    style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
  />

  <!-- HEADER & LOGO -->
  <HeaderAndLogo />

  <!-- MENU BUTTON -->
  <LateralMenu />

  <div
    class="absolute md:relative md:my-5 flex flex-col bottom-0 w-full h-[40vh] items-center"
  >
    <p class="my-5 text-agreen text-5xl font-ivy">¿Cómo funciona?</p>

    <!-- STEPS TUTORIAL -->
    <div class="w-full text-ared flex space-x-12 justify-center">
      <!-- STEP 1 -->
      <div class="flex flex-col items-center">
        <div class="w-28 h-28">
          <img
            class="w-full h-full object-contain"
            alt="step-1"
            src="/images/ELEMENTOS/CALENDARIO.webp"
          />
        </div>

        <div>
          <p>
            1. Accede<br />diariamente del
            <span class="font-bold">1 al<br />25 de Diciembre.</span>
          </p>
        </div>
      </div>

      <!-- STEP 2 -->
      <div class="flex flex-col items-center">
        <div class="w-28 h-28 relative">
          <img
            class="w-full h-full object-contain"
            alt="step-2"
            src="/images/ELEMENTOS/VENTANA CALENDARIO.webp"
          />

          <div class="w-16 h-16 absolute bottom-0 right-0">
            <img
              class="object-contain"
              alt="step-2"
              src="/images/ELEMENTOS/CLIC.webp"
            />
          </div>
        </div>

        <div>
          <p>
            2. Da clic <span class="font-bold"
              >en la<br />ventana con el<br />número
            </span>
            de día<br />correspondiente.
          </p>
        </div>
      </div>

      <!-- STEP 3 -->
      <div class="flex flex-col items-center">
        <div class="w-28 h-28">
          <img
            class="w-full h-full object-contain"
            alt="step-3"
            src="/images/ELEMENTOS/PINO.webp"
          />
        </div>

        <p>
          3. Deberás <span class="font-bold"
            >realizar<br />la buena acción
          </span>
          del<br />día que se indique.
        </p>
      </div>

      <!-- STEP 4 -->
      <div class="flex flex-col items-center">
        <div class="w-28 h-28 relative">
          <img
            class="w-full h-full object-contain"
            alt="step-4"
            src="/images/ELEMENTOS/VENTANA CALENDARIO.webp"
          />

          <div
            class="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="object-contain"
              alt="step-4"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        </div>

        <p>
          4. <span class="font-bold">Regresa al día<br />siguiente, </span>
          se marcará<br />automáticamente<br />con una estrella lo<br />que ya
          realizaste.
        </p>
      </div>
    </div>
  </div>
</div>
