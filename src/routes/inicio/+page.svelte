<script lang="ts">
  import { goto } from "$app/navigation";
  import AngelitaDialog from "$lib/components/AngelitaDialog.svelte";
  import GridBuenasObras from "$lib/components/GridBuenasObras.svelte";
  import LateralMenu from "$lib/components/LateralMenu.svelte";
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
  import type { USER_SCHEMA } from "$lib/constants/db";
  import StarsTransition from "$lib/transitions/StarsTransition.svelte";
  import { AuthStore } from "../../stores/AuthStore";

  let currentDay: number;
  let nextAvailableDay: number;

  let dataFromUser: USER_SCHEMA;
  AuthStore.subscribe((curr) => {
    dataFromUser = curr?.data;
    nextAvailableDay = dataFromUser.lastDay + 1;
    currentDay = curr?.currentDay;
  });
</script>

<!-- {#if $AuthStore.currentUser} -->
<StarsTransition duration={1000}>
  <div
    class="portrait:hidden flex w-screen h-screen bg-no-repeat inner-div box-border overflow-hidden relative flex-col text-center items-center justify-center"
  >
    <!-- BACKGROUND TEXTURE -->
    <div
      class="w-full h-screen absolute inner-div box-border overflow-y-hidden bg-cover opacity-90"
      style="background: url('/images/FONDOS/CASA.webp') no-repeat; float: left; background-size: 100vh; background-size: cover; background-position: center; scale: 100%;"
    />

    <AngelitaDialog />

    <!-- LOGO -->
    <WhiteLogo />

    <!-- MENU BUTTON -->
    <LateralMenu />

    <!-- GRID BUENAS OBRAS -->
    <GridBuenasObras />

    <!-- Stars -->
  </div>

  <div
    class="landscape:hidden w-full h-full inner-div box-border overflow-y-hidden"
  >
    <div class="w-full h-[30vh] overflow-hidden">
      <img
        src="/images/FONDOS/CASA.webp"
        alt="CASA"
        class="h-full object-cover"
      />
    </div>

    <!-- LOGO -->
    <WhiteLogo />

    <!-- MENU BUTTON -->
    <LateralMenu />

    <div class="flex w-full space-x-2 items-center justify-center">
      <!-- <div class="phone-icon max-w-full h-8">
        <img
          class="w-fit h-full md:w-4 md:h-4 lg:w-8 lg:h-8 object-cover cursor-pointer"
          alt="ICONO PLAY"
          src="/images/ICONOS/ROTAR_CELULAR.png"
        />
      </div> -->
      <div class="f9-latino my-3 text-center flex flex-col items-center">
        <div class="phone-icon max-w-fit h-8 mb-1">
          <img
            class="w-fit h-full md:w-4 md:h-4 lg:w-8 lg:h-8 object-cover cursor-pointer"
            alt="ICONO PLAY"
            src="/images/ICONOS/ROTAR_CELULAR.png"
          />
        </div>
        <p class="leading-none">Rota tu celular de manera horizontal</p>
        <p class="leading-none">para una mejor experiencia</p>
      </div>
    </div>

    <div
      class="w-[85vw] h-[85vw] grid grid-cols-5 grid-rows-5 gap-1 sm:gap-3 place-content-center place-items-center mx-auto overflow-hidden"
    >
      {#each { length: 25 } as _, i}
        <button
          on:click={() => goto(`/inicio/${i + 1}`)}
          disabled={i + 1 !== nextAvailableDay || i + 1 > currentDay}
          class="w-[15vw] h-[15vw] relative rounded-xl shadow-md {i < currentDay
            ? 'bg-white'
            : 'bg-gray-300'}"
        >
          <p
            class="fivy font-black h-full w-full {nextAvailableDay > i + 1
              ? 'text-agreen'
              : 'text-gray-500'}"
          >
            {i + 1}
          </p>

          {#if i + 1 <= currentDay && i + 1 <= nextAvailableDay}
            <div
              class="w-[8vw] h-[8vw] absolute transform left-1/2 -translate-x-1/2 bottom-0.5"
            >
              <img
                class="w-full h-full object-contain {nextAvailableDay > i + 1
                  ? 'bg-white'
                  : 'grayscale-img'}"
                alt="star"
                src="/images/ELEMENTOS/ESTRELLA.webp"
              />
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</StarsTransition>

<!-- {:else}
  <div>Loading....</div>
{/if} -->

<!-- <style>
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style> -->
