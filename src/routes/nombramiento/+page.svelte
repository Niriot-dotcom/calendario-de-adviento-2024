<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import MagicTransition from "$lib/transitions/MagicTransition.svelte";
  import { doc, setDoc } from "firebase/firestore";
  import { AuthStore } from "../../stores/AuthStore";
  import { db } from "$lib/firebase/firebase.client";
  import { COLLECTIONS, type USER_SCHEMA } from "$lib/constants/db";

  let angelitaName: string = "";
  let angelitoName: string = "";
  let validNames: boolean = false;

  async function saveAngelitosNames() {
    try {
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

      const userRef = doc(
        db,
        COLLECTIONS.Usuarios,
        $AuthStore.currentUser!.uid
      );
      await setDoc(userRef, { angelitaName, angelitoName }, { merge: true });
      validNames = true;
    } catch (err) {
      console.log("There was an error saving your information");
    }

    // let dataToSetToStore: USER_SCHEMA;
    //   const docRef = doc(db, COLLECTIONS.Usuarios, user.uid);
    //   const docSnap = await getDoc(docRef);
    //   if (!docSnap.exists()) {
    //     console.log("Creating User");
    //     const userRef = doc(db, COLLECTIONS.Usuarios, user.uid);
    //     dataToSetToStore = {
    //       username: "",
    //       email: user.email!,
    //       angelitaName: "",
    //       angelitoName: "",
    //       lastDay: 0,
    //     };
    //     await setDoc(userRef, dataToSetToStore, { merge: true });
    //   } else {
    //     console.log("Fetching User");
    //     const userData: USER_SCHEMA = docSnap.data();
    //     dataToSetToStore = userData;
    //   }

    //   AuthStore.update((curr) => {
    //     return {
    //       ...curr,
    //       currentUser: user,
    //       data: dataToSetToStore,
    //       isLoading: false,
    //     };
    //   });
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
    <div class="f5-latino my-5 text-agreen">
      <p class="leading-none">Para comenzar nombra a tus Angelitos,</p>
      <p class="leading-none">
        ellos <span class="f6-latino">te acompañarán durante el Adviento.</span>
      </p>
    </div>

    <!-- TEXT FIELDS -->
    <form
      class="flex flex-col space-y-5 w-full items-center justify-center text-agreen"
    >
      <!-- ANGELITA -->
      <div class="flex flex-col md:w-2/6">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="latino-xl text-nowrap">Nombra a tu Angelita:</label>
        <input
          bind:value={angelitaName}
          name="nombre-angelita"
          type="text"
          class="vinput"
        />
      </div>

      <!-- ANGELITO -->
      <div class="flex flex-col md:w-2/6">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="latino-xl text-nowrap">Nombra a tu Angelito:</label>
        <input
          bind:value={angelitoName}
          name="nombre-angelito"
          type="text"
          class="vinput"
        />
      </div>

      {#if !validNames}
        <button
          on:click={saveAngelitosNames}
          class="z-50 mb-5 rounded-xl border border-ared mt-5 px-5 py-1 hover:text-white hover:bg-ared transition-all ease-linear duration-200"
          type="submit"
        >
          Guardar
        </button>
      {/if}
    </form>
  </div>

  {#if validNames}
    <NextButton nextRoute="/indicaciones" />
  {/if}
</MagicTransition>
