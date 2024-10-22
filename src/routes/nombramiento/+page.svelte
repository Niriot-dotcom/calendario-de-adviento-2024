<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import MagicTransition from "$lib/transitions/MagicTransition.svelte";
  import { doc, setDoc } from "firebase/firestore";
  import { AuthStore } from "../../stores/AuthStore";
  import { db } from "$lib/firebase/firebase.client";
  import {
    COLLECTIONS,
    MIN_LENGTH_ANGELITOS_NAME,
    type USER_SCHEMA,
  } from "$lib/constants/db";
  import { goto } from "$app/navigation";

  let angelitaName: string = "";
  let angelitoName: string = "";
  let errorMsg: string = "";

  async function saveAngelitosNames() {
    try {
      if (
        angelitaName.length < MIN_LENGTH_ANGELITOS_NAME ||
        angelitoName.length < MIN_LENGTH_ANGELITOS_NAME
      ) {
        errorMsg = `Los nombres tienen que ser de al menos ${MIN_LENGTH_ANGELITOS_NAME} caracteres`;
        return;
      }
      errorMsg = "";
      const userRef = doc(
        db,
        COLLECTIONS.Usuarios,
        $AuthStore.currentUser!.uid
      );
      await setDoc(userRef, { angelitaName, angelitoName }, { merge: true });

      let newData: USER_SCHEMA = $AuthStore.data;
      newData.angelitaName = angelitaName;
      newData.angelitoName = angelitoName;
      AuthStore.update((curr) => {
        return {
          ...curr,
          data: newData,
          isLoading: false,
        };
      });

      goto("/indicaciones");
    } catch (err) {
      console.log("There was an error saving your information");
      errorMsg = `Los nombres tienen que ser de al menos ${MIN_LENGTH_ANGELITOS_NAME} caracteres`;
    }
  }
</script>

<MagicTransition>
  <!-- HEADER & LOGO -->
  <HeaderAndLogo />

  <!-- ANGELITOS -->
  <div
    class="absolute flex justify-between w-full h-[35vh] top-[40%] transform -translate-y-[40%]"
  >
    <AngelitosHomepage
      isAngelitoFirst
      firstPosition="TOP"
      angelitosSize="w-5/6"
    />
  </div>

  <div
    class="absolute md:relative md:my-5 flex flex-col bottom-0 w-full h-[40vh]"
  >
    <!-- FOOTER -->
    <div class="f5-latino my-5">
      <p class="leading-none">Para comenzar nombra a tus Angelitos,</p>
      <p class="leading-none">
        ellos <span class="f6-latino">te acompañarán durante el Adviento.</span>
      </p>

      {#if errorMsg !== ""}
        <p class="text-ared f5-latino">⚠️ {errorMsg}</p>
      {/if}
    </div>

    <!-- TEXT FIELDS -->
    <form class="flex flex-col space-y-5 w-full items-center justify-center">
      <!-- ANGELITA -->
      <div class="flex flex-col md:w-2/6">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="f4-latino text-nowrap">Nombra a tu Angelita:</label>
        <input
          bind:value={angelitaName}
          name="nombre-angelita"
          type="text"
          class="vinput f5-latino"
        />
      </div>

      <!-- ANGELITO -->
      <div class="flex flex-col md:w-2/6">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="f4-latino text-nowrap">Nombra a tu Angelito:</label>
        <input
          bind:value={angelitoName}
          name="nombre-angelito"
          type="text"
          class="vinput f5-latino"
        />
      </div>

      <button on:click={saveAngelitosNames} type="submit" class="btnp">
        <p class="f4-latino text-white font-extrabold tracking-wide">Guardar</p>
      </button>
    </form>
  </div>
</MagicTransition>
