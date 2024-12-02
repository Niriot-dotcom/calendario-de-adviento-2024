<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { AuthStore } from "../../stores/AuthStore";
  import {
    DIALOGS,
    getCurrentDialog,
    getDialogs,
    type IDialog,
  } from "$lib/constants/dialogs";

  let currentDay: number = 1;
  let userDay: number = 1;
  let angelitoName: string;
  let angelitaName: string;

  let dialogs: IDialog[];
  let dialogStructure: IDialog = DIALOGS.DEFAULT[0];
  let dialogIndex: number = -1;

  AuthStore.subscribe((curr) => {
    userDay = curr?.data.lastDay;
    angelitoName = curr?.data.angelitoName;
    angelitaName = curr?.data.angelitaName;
    currentDay = curr?.currentDay;

    dialogs = getDialogs(userDay, currentDay, angelitoName, angelitaName);
    // let lastDay = curr?.data.lastDay;
    // if (lastDay === currentDay) {
    //   dialog = `Recuerda realizar tu buena acción del día y regresar mañana`;
    //   isLargeText = true;
    // } else if (lastDay < currentDay) {
    //   dialog = `Abre todas<br />las puertas<br />hasta hoy`;
    //   isLargeText = true;
    // }
  });

  function resetAnimations() {
    alert("resetAnimations running");
    initTourAngelito = false;
    initDisapearing = false;

    initTourAngelita = false;
    initBouncing = false;
    showDialog = false;
    dialogIndex = -1;

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

            // setInterval(() => {
            //   dialogStructure = getCurrentDialog(dialogs, dialogIndex)[0];
            //   dialogIndex = getCurrentDialog(dialogs, dialogIndex)[1];
            // }, 2000);
          }, 2000);
        }, 500);
      }, 1500);
    }, 1500);

    // if (window) {
    //   window.addEventListener("resize", () => {
    //     if (screen.availHeight < screen.availWidth) {
    //       resetAnimations();
    //     }
    //   });
    // }
  }
  onDestroy(() => {
    // if (window) {
    //   window.removeEventListener("resize", () => {
    //     if (screen.availHeight < screen.availWidth) {
    //       resetAnimations();
    //     }
    //   });
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
    if (userDay === 0) {
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
      }, 1500);
    } else {
      showDialog = true;
      initBouncing = true;
      beginDialogs = true;

      setInterval(() => {
        dialogStructure = getCurrentDialog(dialogs, dialogIndex)[0];
        dialogIndex = getCurrentDialog(dialogs, dialogIndex)[1];
      }, 2000);
    }
  });

  $: if (currentDay === userDay) {
    dialogs = getDialogs(userDay, currentDay, angelitoName, angelitaName);
  }
</script>

{#if userDay === 0}
  <div class="z-10 portrait:hidden landscape:block">
    <img
      src="/images/PERSONAJES/ANGELITO.webp"
      alt="ANGELITO"
      class="scale-x-[-1]x angelito-img {initTourAngelito
        ? 'tour'
        : ''} {initDisapearing ? 'disapearing' : ''}"
    />

    <div class="fixed top-[8vh] right-[10vh] h-[45vh]">
      {#if beginDialogs}
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
                  <span class="f9-latino">
                    {@html dialogStructure.BOLD.replaceAll(
                      "{UserDay}",
                      userDay > 0 ? userDay.toString() : "1"
                    )}<br />
                  </span>
                {/if}
                {#if dialogStructure && dialogStructure.NORMAL}
                  {@html dialogStructure.NORMAL.replaceAll(
                    "{UserDay}",
                    userDay > 0 ? userDay.toString() : "1"
                  )}
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
                  <span class="f9-latino">
                    {@html dialogStructure.BOLD.replaceAll(
                      "{UserDay}",
                      userDay > 0 ? userDay.toString() : "1"
                    )}<br />
                  </span>
                {/if}
                {#if dialogStructure && dialogStructure.NORMAL}
                  {@html dialogStructure.NORMAL.replaceAll(
                    "{UserDay}",
                    userDay > 0 ? userDay.toString() : "1"
                  )}
                {/if}
              </p>
            </div>
          {/if}
        </div>
      {/if}
    </div>

    <img
      src="/images/PERSONAJES/ANGELITA.webp"
      alt="ANGELITA"
      class="scale-x-[-1]x angelita-img {initTourAngelita
        ? 'tour'
        : ''} {initBouncing ? 'bouncing' : ''}"
    />
  </div>
{:else}
  <div class="z-10">
    <div class="fixed top-[8vh] right-[10vh] h-[45vh]">
      <div class="relative">
        {#if beginDialogs}
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
              {#if dialogStructure && dialogStructure.BOLD}
                <span class="f9-latino">
                  {@html dialogStructure.BOLD.replaceAll(
                    "{UserDay}",
                    userDay > 0 ? userDay.toString() : "1"
                  )}<br />
                </span>
              {/if}
              {#if dialogStructure && dialogStructure.NORMAL}
                {@html dialogStructure.NORMAL.replaceAll(
                  "{UserDay}",
                  userDay > 0 ? userDay.toString() : "1"
                )}
              {/if}
            </p>
          </div>
        {/if}
      </div>
    </div>

    <img
      src="/images/PERSONAJES/ANGELITA.webp"
      alt="ANGELITA"
      class="scale-x-[-1]x angelita-img {showDialog ? 'bouncing' : 'opacity-0'}"
    />
  </div>
{/if}

<style>
  .angelito-img {
    position: fixed;
    top: 5vh;
    right: -18vh;
    height: 30vh;
    transition:
      transform 2s ease,
      opacity 1s ease;
  }

  .angelito-img.tour {
    transform: translate(calc(-50vw - 3vw), calc(150dvh - 300px));
  }
  .angelito-img.disapearing {
    transform: scale(0);
    opacity: 0;
    transform: translate(calc(-50vw - 3vw), calc(150dvh - 300px));
    /* top: calc(95vh - 300px);
    left: 47vw; */
  }

  /*  */

  .angelita-img {
    position: fixed;
    top: -30vh;
    left: 3vh;
    height: 30vh;
    transition:
      transform 2s ease,
      opacity 1s ease;
  }

  .angelita-img.tour {
    transform: translate(88vw, calc(67vh));
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
      transform: translate(88vw, calc(67vh));
    }
    50% {
      transform: translate(88vw, calc(67vh - 10px));
    }
  }
</style>
