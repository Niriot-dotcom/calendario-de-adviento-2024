<script lang="ts">
  import { onMount } from "svelte";
  import { AuthStore } from "../../stores/AuthStore";
  import {
    DIALOGS,
    getCurrentDialog,
    getDialogs,
    type IDialog,
  } from "$lib/constants/dialogs";

  let currentDay: number = 0;
  let userDay: number = 0;

  let dialogs: IDialog[] = getDialogs(userDay);
  let dialogStructure: IDialog = DIALOGS.DEFAULT[0];
  let dialogIndex: number = -1;

  AuthStore.subscribe((curr) => {
    userDay = curr?.data.lastDay;
    currentDay = curr?.currentDay;
    // let lastDay = curr?.data.lastDay;
    // if (lastDay === currentDay) {
    //   dialog = `Recuerda realizar tu buena acción del día y regresar mañana`;
    //   isLargeText = true;
    // } else if (lastDay < currentDay) {
    //   dialog = `Abre todas<br />las puertas<br />hasta hoy`;
    //   isLargeText = true;
    // }
  });

  // ANIMATIONS
  let initTourAngelito = false;
  let initDisapearing = false;

  let initTourAngelita = false;
  let initBouncing = false;
  let showDialog = false;
  let beginDialogs = false;
  onMount(() => {
    setTimeout(() => {
      showDialog = true;
    }, 1000);

    setTimeout(() => {
      initTourAngelito = true;
      setTimeout(() => {
        initDisapearing = true;
        setTimeout(() => {
          initTourAngelita = true;
          setTimeout(() => {
            initBouncing = true;
            beginDialogs = true;

            setInterval(() => {
              dialogStructure = getCurrentDialog(dialogs, dialogIndex)[0];
              dialogIndex = getCurrentDialog(dialogs, dialogIndex)[1];
            }, 2000);
          }, 2000);
        }, 500);
      }, 1500);
    }, 1000);
  });
</script>

{#if userDay === 0}
  <div class="z-10">
    <img
      src="/images/PERSONAJES/ANGELITO.webp"
      alt="ANGELITO"
      class="scale-x-[-1] angelito-img {initTourAngelito
        ? 'tour'
        : ''} {initDisapearing ? 'disapearing' : ''}"
    />

    <div class="fixed top-[8vh] right-[10vh] h-[45vh]">
      <div class="relative">
        {#if dialogStructure && dialogStructure.SIZE === ""}
          <img
            alt="GLOBO DIALOGO"
            src="/images/ELEMENTOS/GLOBO ANGELITA.webp"
            class="h-[25vh] relative transform transition-all ease-linear duration-300 {initBouncing
              ? 'bouncing'
              : 'opacity-0'}"
          />

          <div
            class="absolute top-[3vh] left-0 w-full h-[13.5vh] px-[3.2vh] transform transition-all ease-linear duration-300 {initBouncing
              ? 'bouncing'
              : 'opacity-0'}"
          >
            <p
              class="w-full h-full f10-latino text-center flex flex-col items-center justify-center leading-none"
            >
              {#if dialogStructure && dialogStructure.BOLD}
                <span class="f9-latino">{@html dialogStructure.BOLD}<br /></span
                >
              {/if}
              {#if dialogStructure && dialogStructure.NORMAL}
                {@html dialogStructure.NORMAL}
              {/if}
            </p>
          </div>
        {:else}
          <img
            alt="GLOBO DIALOGO"
            src="/images/ELEMENTOS/GLOBO ANGELITA LARGO.webp"
            class="h-[40vh] relative transform transition-all ease-linear duration-300 {initBouncing
              ? 'bouncing'
              : 'opacity-0'}"
          />

          <div
            class="absolute top-[5vh] left-0 w-full h-[26vh] px-[2.8vh] transform transition-all ease-linear duration-300 {initBouncing
              ? 'bouncing'
              : 'opacity-0'}"
          >
            <p
              class="w-full h-full f10-latino text-center flex flex-col items-center justify-center leading-none"
            >
              {#if dialogStructure && dialogStructure.BOLD}
                <span class="f9-latino">{@html dialogStructure.BOLD}<br /></span
                >
              {/if}
              {#if dialogStructure && dialogStructure.NORMAL}
                {@html dialogStructure.NORMAL}
              {/if}
            </p>
          </div>
        {/if}
      </div>
    </div>

    <img
      src="/images/PERSONAJES/ANGELITA.webp"
      alt="ANGELITA"
      class="scale-x-[-1] angelita-img {initTourAngelita
        ? 'tour'
        : ''} {initBouncing ? 'bouncing' : ''}"
    />
  </div>
{:else}
  <div class="z-10">
    <div class="fixed top-[8vh] right-[10vh] h-[45vh]">
      <div class="relative">
        <img
          alt="GLOBO DIALOGO"
          src="/images/ELEMENTOS/GLOBO ANGELITA.webp"
          class="h-[25vh] relative transform transition-all ease-linear duration-300 {showDialog
            ? 'bouncing'
            : 'opacity-0'}"
        />

        <div
          class="absolute top-[3vh] left-0 w-full h-[13.5vh] px-[3.2vh] transform transition-all ease-linear duration-300 {showDialog
            ? 'bouncing'
            : 'opacity-0'}"
        >
          <p
            class="w-full h-full f10-latino text-center flex flex-col items-center justify-center leading-none"
          >
            <span class="f9-latino">¡Hoy es el día {userDay + 1}!</span>
            {@html dialog}
          </p>
        </div>
      </div>
    </div>

    <img
      src="/images/PERSONAJES/ANGELITA.webp"
      alt="ANGELITA"
      class="scale-x-[-1] angelita-img {showDialog ? 'bouncing' : 'opacity-0'}"
    />
  </div>
{/if}

<style>
  .angelito-img {
    position: fixed;
    top: 5vh;
    left: 3vh;
    height: 30vh;
    transition:
      transform 2s ease,
      opacity 1s ease;
  }

  .angelito-img.tour {
    transform: translate(calc(50vw - 3vw), calc(95vh - 300px));
  }
  .angelito-img.disapearing {
    transform: scale(0);
    opacity: 0;
    transform: translate(calc(50vw - 3vw), calc(95vh - 300px));
    /* top: calc(95vh - 300px);
    left: 47vw; */
  }

  /*  */

  .angelita-img {
    position: fixed;
    top: 40vh;
    left: 3vh;
    height: 30vh;
    transition:
      transform 2s ease,
      opacity 1s ease;
  }

  .angelita-img.tour {
    transform: translate(87vw, calc(-3vh));
  }
  .angelita-img.bouncing {
    animation: bounceSmooth 2s infinite;
  }
  /* .dialog-img.bouncing {
    animation: bounceSmooth 2s infinite;
  } */

  @keyframes bounceSmooth {
    0%,
    100% {
      transform: translate(87vw, calc(-3vh));
    }
    50% {
      transform: translate(87vw, calc(-3vh - 10px));
    }
  }
</style>
