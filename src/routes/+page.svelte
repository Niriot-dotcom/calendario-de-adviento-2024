<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import LaMagiaCopy from "$lib/components/LaMagiaCopy.svelte";
  import SignInUpForm from "$lib/components/SignInUpForm.svelte";
  import TimeRemaining from "$lib/components/TimeRemaining.svelte";
  import MagicTransition from "$lib/transitions/MagicTransition.svelte";
  import {
    capitalizeFirstLetter,
    isContentAvailable,
    isLastDayNovember,
  } from "$lib/utils";
  import {
    areThereDaysLeft,
    getRemainingTime,
    isTomorrow,
  } from "$lib/utils/getRemainingTime";
  import { AuthStore } from "../stores/AuthStore";

  export let data: { currentDate: string };
  let testingHours = false;

  let currentUsername: string;
  let userDay: number;
  let angelitaName: string;
  let angelitoName: string;
  AuthStore.subscribe((curr) => {
    currentUsername = curr?.data.username;
    userDay = curr?.data.lastDay;
    angelitaName = curr?.data.angelitaName;
    angelitoName = curr?.data.angelitoName;
  });
</script>

<MagicTransition>
  {#if !areThereDaysLeft(testingHours)}
    <HeaderAndLogo />
  {:else}
    <HeaderAndLogo hideText />
    <LaMagiaCopy />
  {/if}

  <div
    class="absolute z-0 flex justify-between w-full h-[38vh] md:h-[80vh] top-[47%] transform -translate-y-[40%]"
  >
    <AngelitosHomepage
      isAngelitoFirst
      firstPosition="TOP"
      angelitosSize="w-5/6"
    />
  </div>

  <div class="absolute flex flex-col bottom-0 w-full z-10">
    {#if currentUsername}
      <div class="flex flex-col space-y-2 text-center items-center md:my-3">
        <p class="f7-ivy leading-tight md:leading-[15vh] lg:leading-none">
          ¡Hola {capitalizeFirstLetter(currentUsername.split("@")[0])}!
        </p>
      </div>
    {/if}

    {#if isContentAvailable(data.currentDate) && currentUsername}
      <div
        class="flex flex-col space-y-2 text-center items-center md:my-3 md:mb-12"
      >
        <a
          href={angelitaName === "" || angelitoName === ""
            ? "/nombramiento"
            : "/inicio"}
          class="btnp w-fit"
          style="background-color: #226f54; border-radius: 32px;"
        >
          <p class="f9-latino text-white">Comenzar</p>
        </a>
      </div>
    {/if}

    {#if !isContentAvailable(data.currentDate)}
      <TimeRemaining bind:testingHours />
    {/if}

    {#if areThereDaysLeft(testingHours)}
      <div class="mt-5 md:mt-3 w-11/12 mx-auto">
        <p class="text-ared f4-latino leading-none">para conocer nuestro</p>
        <p class="text-ared f3-ivy leading-none">Calendario de Adviento 2024</p>
      </div>
    {/if}

    {#if !isContentAvailable(data.currentDate)}
      <div class="mb-5 mt-1 w-5/12 md:w-6/12 mx-auto">
        <p class="f10-latino leading-none mt-0">
          Disponible a partir del 1 de Diciembre del 2024
        </p>
      </div>
    {/if}

    {#if !currentUsername}
      <SignInUpForm />
    {/if}

    <div class="my-5 md:my-3 lg:my-5 w-7/12 md:w-4/12 lg:w-[39%] mx-auto">
      <p class="text-ared f10-latino leading-none">
        Con nuestro calendario
        <span class="text-ared f9-latino leading-none">
          realizarás acciones nobles jugando y disfrutando
        </span>
        el tiempo con tus seres queridos.
      </p>
    </div>
  </div>
</MagicTransition>
