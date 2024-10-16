<script lang="ts">
  import { page } from "$app/stores";
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
  import { BUENAS_OBRAS } from "$lib/constants/buenasObras";
  import NextButton from "$lib/components/NextButton.svelte";
  import { doc, setDoc } from "firebase/firestore";
  import { COLLECTIONS, type USER_SCHEMA } from "$lib/constants/db";
  import { db } from "$lib/firebase/firebase.client";
  import { AuthStore } from "../../../stores/AuthStore";

  let index: number = +$page.params.index - 1;

  async function updateDay() {
    try {
      const userRef = doc(
        db,
        COLLECTIONS.Usuarios,
        $AuthStore.currentUser!.uid
      );
      await setDoc(userRef, { lastDay: index }, { merge: true });

      let newData: USER_SCHEMA = $AuthStore.data;
      newData.lastDay = index;
      AuthStore.update((curr) => {
        return {
          ...curr,
          data: newData,
          // isLoading: false,
        };
      });

      console.log("newData: ", newData);
    } catch (err) {
      console.log("There was an error saving your information");
    }
  }
</script>

<!-- <div
  class="w-screen h-screen bg-no-repeat md:h-screen inner-div box-border overflow-hidden relative border-[12px] border-ared flex flex-col text-center items-center justify-center"
> -->
<!-- BACKGROUND TEXTURE -->
<div
  class="w-full h-screen md:h-screen absolute inner-div box-border overflow-y-hidden bg-cover opacity-70"
  style="background: url('/images/FONDOS/ESCENARIO_1.webp') no-repeat; float: left; background-size: 100vw; background-size: cover; background-position: center;"
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
        src="/images/PERSONAJES/{BUENAS_OBRAS[index].personaje}.webp"
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
        {BUENAS_OBRAS[index].description}
      </p>
    </div>
  </div>

  <!-- SEPARATOR -->
  <!-- <div class="w-full"></div> -->

  <!-- GLOBO ANGELITA -->
  <div class="w-1/4 h-5/6 relative">
    <div class="w-full relative">
      <img
        class="w-full h-full object-contain"
        alt="GLOBO PERSONAJES"
        src="/images/ELEMENTOS/GLOBO ANGELITA.webp"
      />

      <div
        class="absolute top-[6vh] left-0 w-full h-1/2 flex flex-col justify-center text-ared px-[2rem] overflow-hidden"
      >
        <p class="leading-none f6-latino">
          {@html BUENAS_OBRAS[index].angelitaText}
        </p>
      </div>
    </div>
  </div>

  <!-- ANGELITA -->
  <div class="w-1/4 h-5/6 animate-bounce-smooth" style="animation-delay: 0.3s;">
    <img
      class="w-5/6 h-full object-contain"
      alt="ANGELITA"
      src="/images/PERSONAJES/ANGELITA.webp"
    />
  </div>
</div>

<NextButton nextRoute="/inicio" prevAction={updateDay} />
<!-- </div> -->
