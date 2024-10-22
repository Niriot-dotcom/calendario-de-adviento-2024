<script lang="ts">
  import { page } from "$app/stores";
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
  import { BUENAS_OBRAS } from "$lib/constants/buenasObras";
  import NextButton from "$lib/components/NextButton.svelte";
  import { doc, setDoc } from "firebase/firestore";
  import { COLLECTIONS, type USER_SCHEMA } from "$lib/constants/db";
  import { db } from "$lib/firebase/firebase.client";
  import { AuthStore } from "../../../stores/AuthStore";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  let showAngelitaDialog = false;
  let showPersonajeDialog = false;

  onMount(() =>
    setTimeout(() => {
      showAngelitaDialog = true;
    }, 100)
  );

  const toggleDialog = () => {
    showAngelitaDialog = !showAngelitaDialog;
    showPersonajeDialog = !showPersonajeDialog;
  };

  let index: number = +$page.params.index - 1;

  async function updateDay() {
    try {
      let newData: USER_SCHEMA = $AuthStore.data;
      newData.lastDay = index + 1;
      AuthStore.update((curr) => {
        return {
          ...curr,
          data: newData,
        };
      });

      const userRef = doc(
        db,
        COLLECTIONS.Usuarios,
        $AuthStore.currentUser!.uid
      );
      await setDoc(userRef, { lastDay: index + 1 }, { merge: true });
    } catch (err) {
      console.log("There was an error saving your information");
    }
  }
</script>

<!-- BACKGROUND TEXTURE -->
<div
  class="w-full h-screen md:h-screen absolute inner-div box-border overflow-y-hidden bg-cover opacity-70"
  style="background: url('/images/FONDOS/ESCENARIO_1.webp') no-repeat; float: left; background-size: 100vw; background-size: cover; background-position: center;"
/>

<!-- LOGO -->
<WhiteLogo />

<!-- IMAGENES -->
<div class="z-0 relative w-full h-full grid grid-cols-2">
  <div class="w-full h-full relative flex">
    {#if showPersonajeDialog}
      <!-- PERSONAJE -->
      <div
        class="w-1/2 h-5/6 animate-bounce-smooth"
        in:fly={{ x: -300, duration: 800, opacity: 0 }}
        out:fade
      >
        <div class="w-full h-full flex items-end justify-end">
          <img
            class="h-4/6 object-contain"
            alt="PERSONAJE"
            src="/images/PERSONAJES/{BUENAS_OBRAS[index].personaje}.webp"
          />
        </div>
      </div>

      <!-- RECUADRO -->
      <div
        class="h-[95%] my-auto w-1/2 relative"
        in:fly={{ x: -300, duration: 800, opacity: 0 }}
        out:fade
      >
        <img
          class="w-full h-full object-contain"
          alt="GLOBO PERSONAJES"
          src="/images/ELEMENTOS/GLOBO PERSONAJES.webp"
        />

        <div
          class="absolute top-1/2 left-0 w-full h-full flex justify-center flex-col transform -translate-y-1/2"
        >
          <p class="f6-latino leading-none px-5">
            La buena acción<br />del día es:
          </p>
          <p class="f5-latino leading-none px-8">
            {BUENAS_OBRAS[index].description}
          </p>
        </div>
      </div>
    {/if}
  </div>

  <!-- SEPARATOR -->
  <!-- <div class="w-full"></div> -->

  <div class="w-full h-full relative flex">
    {#if showAngelitaDialog}
      <!-- GLOBO ANGELITA -->
      <div
        class="w-6/12 h-full relative"
        in:fly={{ x: 300, duration: 800, opacity: 0 }}
        out:fade
      >
        <div class="w-full h-fit relative">
          <img
            class="w-full h-full object-contain"
            alt="GLOBO PERSONAJES"
            src="/images/ELEMENTOS/GLOBO ANGELITA.webp"
          />

          <div
            class="absolute top-[2vw] left-0 w-full h-[10vw] flex flex-col justify-center text-ared px-[2rem] overflow-hidden"
          >
            <p class="leading-none f6-latino">
              {@html BUENAS_OBRAS[index].angelitaText}
            </p>
          </div>
        </div>
      </div>

      <!-- ANGELITA -->
      <div
        class="w-1/2 h-full animate-bounce-smooth"
        in:fly={{ x: 300, duration: 800, opacity: 0 }}
        out:fade
      >
        <img
          class="w-5/6 h-full object-contain"
          alt="ANGELITA"
          src="/images/PERSONAJES/ANGELITA.webp"
        />
      </div>
    {/if}
  </div>
</div>

{#if showPersonajeDialog}
  <NextButton nextRoute="/inicio" prevAction={updateDay} />

  <button
    on:click={toggleDialog}
    class="absolute bottom-[1vh] left-[1vh] lg:bottom-[1vh] lg:left-[1vh] z-50 w-fit h-[5vh] landscape:h-[10vh]"
  >
    <img
      class="h-full object-contain scale-x-[-1]"
      alt="next-button"
      src="/images/ELEMENTOS/BOTON.webp"
    />
  </button>
{:else}
  <button
    on:click={toggleDialog}
    class="absolute bottom-[1vh] right-[1vh] lg:bottom-[1vh] lg:right-[1vh] z-50 w-fit h-[5vh] landscape:h-[10vh]"
  >
    <img
      class="h-full object-contain"
      alt="next-button"
      src="/images/ELEMENTOS/BOTON.webp"
    />
  </button>
{/if}
