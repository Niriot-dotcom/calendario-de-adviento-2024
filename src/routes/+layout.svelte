<script lang="ts">
  import "../app.css";
  import MagicTransition from "$lib/transitions/MagicTransition.svelte";
  import { onMount } from "svelte";
  import { auth, db } from "$lib/firebase/firebase.client";
  import { getDoc, doc, setDoc } from "firebase/firestore";
  import { browser } from "$app/environment";
  import { AuthStore } from "../stores/AuthStore";
  import { COLLECTIONS } from "$lib/constants/db";
  import type { USER_SCHEMA } from "$lib/constants/db";
  import { isContentAvailable } from "$lib/utils";
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";

  export let data: { currentDate: string };
  let showContent = false;

  onMount(() => {
    showContent = isContentAvailable(data.currentDate);

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        return;
      }

      AuthStore.update((curr) => {
        return { ...curr, isLoading: false, currentUser: user };
      });

      // data
      let dataToSetToStore: USER_SCHEMA;
      const docRef = doc(db, COLLECTIONS.Usuarios, user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        // console.log("Creating User");
        const userRef = doc(db, COLLECTIONS.Usuarios, user.uid);
        dataToSetToStore = {
          username:
            user?.displayName?.split(" ")[0] || user?.email?.split("@")[0],
          email: user.email!,
          angelitaName: "",
          angelitoName: "",
          lastDay: 0,
        };
        await setDoc(userRef, dataToSetToStore, { merge: true });
      } else {
        // console.log("Fetching User");
        const userData: USER_SCHEMA = docSnap.data();
        dataToSetToStore = userData;
      }

      AuthStore.update((curr) => {
        return {
          ...curr,
          currentUser: user,
          data: dataToSetToStore,
          isLoading: false,
        };
      });

      if (
        browser &&
        !$AuthStore?.currentUser &&
        !$AuthStore.isLoading &&
        window &&
        window.location.pathname !== "/"
      ) {
        // redirect to sign in if there is no user
        window.location.href = "/";
        // console.log($AuthStore.currentUser, $AuthStore.isLoading);
      }
    });
    return unsubscribe;
  });

  // simple
  // onMount(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     console.log(user);
  //     AuthStore.update((curr) => {
  //       return { ...curr, isLoading: false, currentUser: user };
  //     });

  //     if (
  //       browser &&
  //       !$AuthStore?.currentUser &&
  //       !$AuthStore.isLoading &&
  //       window.location.pathname !== "/"
  //     ) {
  //       window.location.href = "/";
  //       console.log(AuthStore.currentUser, AuthStore.isLoading);
  //     }
  //   });
  //   return unsubscribe;
  // });
</script>

<svelte:head>
  <title>Calendario de Adviento</title>
  <meta name="description" content="Calendario de Adviento 2024 | Vianney" />
</svelte:head>

<div class="app">
  <main
    class="z-0 w-screen h-[100dvh] landscape:h-screen inner-div box-border overflow-hidden relative border-[12px] border-ared bg-cover flex flex-col text-center"
    style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
  >
    <!-- {#if showContent || data.url === "/"} -->
    <!-- <MagicTransition key={data.url} duration={1000}> -->
    <slot />
    <!-- </MagicTransition> -->
    <!-- {:else}
      <div
        class="absolute z-0 flex justify-between w-full h-[38vh] md:h-[80vh] top-[32%] transform -translate-y-[40%]"
      >
        <AngelitosHomepage
          isAngelitoFirst
          firstPosition="TOP"
          angelitosSize="w-5/6"
        />
      </div>

      <div class="w-full h-full flex items-center">
        <p class="f4-latino w-4/6 mx-auto">
          Contenido disponible entre el 1 de diciembre de 2024 y el 6 de enero
          de 2025.
        </p>
      </div>
    {/if} -->
  </main>
</div>
