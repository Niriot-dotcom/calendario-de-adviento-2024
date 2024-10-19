<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import MagicTransition from "$lib/transitions/MagicTransition.svelte";

  let steps = [
    {
      htmlText: `1. Accede<br />diariamente del
            <span class="f9-latino">1 al<br />25 de Diciembre.</span>`,
      image: "/images/ELEMENTOS/CALENDARIO.webp",
      secondImage: "",
    },
    {
      htmlText: `2. Da clic <span class="f9-latino">en la<br />ventana con el<br />número
            </span>de día<br />correspondiente.`,
      image: "/images/ELEMENTOS/VENTANA CALENDARIO.webp",
      secondImage: "/images/ELEMENTOS/CLIC.webp",
    },
    {
      htmlText: `3. Deberás <span class="f9-latino">realizar<br />la buena acción</span>
            del<br />día que se indique.`,
      image: "/images/ELEMENTOS/PINO.webp",
      secondImage: "",
    },
    {
      htmlText: `4. <span class="f9-latino">Regresa al día<br />siguiente, </span>
          se marcará<br />automáticamente<br />con una estrella lo<br />que ya realizaste.`,
      image: "/images/ELEMENTOS/VENTANA CALENDARIO.webp",
      secondImage: "/images/ELEMENTOS/ESTRELLA.webp",
    },
  ];
</script>

<MagicTransition>
  <!-- 'CASA' TEXTURE -->
  <div
    class="z-10 w-full h-full absolute inner-div box-border overflow-y-hidden bg-cover bg-no-repeat"
    style="background-image: url('/images/FONDOS/CASA.webp'); float: left; background-size: 100vw; background-size: cover; background-position: center;"
  />

  <div
    class="absolute z-20 flex justify-between md:px-[3vw] w-full h-[20vh] md:h-[40vh] top-[12vh] sm:top-[10vh] md:top-[5vh]"
  >
    <AngelitosHomepage
      isAngelitoFirst
      firstPosition="BOTH_TOP"
      angelitosSize="w-4/6 sm:w-3/6 md:w-4/6 lg:w-6/12 xl:w-4/12"
    />
  </div>

  <!-- BACKGROUND TEXTURE -->
  <div
    class="z-30 w-full h-full absolute inner-div box-border overflow-y-hidden bg-cover opacity-90"
    style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
  />

  <div class="z-40 relative flex flex-col w-full h-fit items-center">
    <!-- HEADER & LOGO -->
    <HeaderAndLogo />

    <p class="my-[2vh] f7-ivy">¿Cómo funciona?</p>

    <!-- STEPS TUTORIAL -->
    <div
      class="w-[95%] grid grid-cols-2 grid-rows-2 justify-center sm:flex sm:space-x-[6.5vw]"
    >
      {#each steps as step, i}
        <div class="flex flex-col items-center">
          <div class="w-[12vh] h-[12vh] lg:w-28 lg:h-28 relative">
            <img
              class="w-full h-full object-contain"
              alt="step-{i}"
              src={step.image}
            />

            {#if step.secondImage !== ""}
              <div
                class={i + 1 === 2
                  ? "w-[8vh] h-[8vh] lg:w-[8vh] lg:h-[8vh] absolute bottom-0 right-0"
                  : "w-[8vh] h-[8vh] lg:w-[8vh] lg:h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"}
              >
                <img
                  class="object-contain"
                  alt="step-{i + 1}"
                  src={step.secondImage}
                />
              </div>
            {/if}
          </div>

          <div>
            <p class="f10-latino leading-tight">
              {@html step.htmlText}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- NEXT BUTTON -->
  <NextButton nextRoute="/inicio" />
</MagicTransition>
