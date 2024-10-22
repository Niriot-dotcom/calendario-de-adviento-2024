<!-- <script>
  import Auth from "$lib/components/auth/Auth.svelte";
</script>

<Auth /> -->

<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import Header from "$lib/components/Header.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import LaMagiaCopy from "$lib/components/LaMagiaCopy.svelte";
  import SignInUpForm from "$lib/components/SignInUpForm.svelte";
  import TimeRemaining from "$lib/components/TimeRemaining.svelte";
  import MagicTransition from "$lib/transitions/MagicTransition.svelte";
  import {
    areThereDaysLeft,
    getRemainingTime,
    isTomorrow,
  } from "$lib/utils/getRemainingTime";

  let testingHours = false;
</script>

<MagicTransition>
  <HeaderAndLogo hideText />

  {#if !areThereDaysLeft(testingHours)}
    <Header />
  {:else}
    <LaMagiaCopy />
  {/if}

  <div
    class="absolute z-0 flex justify-between w-full h-[38vh] md:h-[80vh] top-[32%] transform -translate-y-[40%]"
  >
    <AngelitosHomepage
      isAngelitoFirst
      firstPosition="TOP"
      angelitosSize="w-5/6"
    />
  </div>

  <div class="absolute flex flex-col bottom-0 w-full z-10">
    {#if isTomorrow(testingHours)}
      <div class="mt-5 text-ared">
        <p class="f4-latino leading-none">La espera está por terminar</p>
        <p class="f3-ivy leading-none">¡Nos vemos mañana!</p>
      </div>
    {/if}

    {#if getRemainingTime() !== "0"}
      <TimeRemaining bind:testingHours />
    {/if}

    {#if areThereDaysLeft(testingHours)}
      <div class="mt-5 md:mt-3 w-11/12 mx-auto">
        <p class="text-ared f4-latino leading-none">para conocer nuestro</p>
        <p class="text-ared f3-ivy leading-none">Calendario de Adviento 2024</p>
      </div>
    {/if}

    <div class="mb-5 mt-1 w-5/12 md:w-6/12 mx-auto">
      <p class="f10-latino leading-none mt-0">
        Disponible a partir del 1 de Diciembre del 2024
      </p>
    </div>

    <SignInUpForm />

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
