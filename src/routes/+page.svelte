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
      <div class="mb-2 text-ared">
        <p class="f4-latino leading-none text-nowrap">para conocer nuestro</p>
        <p class="f1-ivy leading-none text-nowrap">Calendario de Adviento</p>
        <p class="f1-ivy leading-none">2024</p>
        <p class="f10-latino leading-none text-agreen mt-1">
          Disponible a partir del
        </p>
        <p class="f10-latino leading-none text-agreen">
          1 de Diciembre del 2024
        </p>
      </div>
    {/if}

    <SignInUpForm />

    <div class="mb-5 mt-5 text-ared">
      <p class="f10-latino leading-none">
        Con nuestro calendario <span class="f9-latino">realizarás</span>
      </p>
      <p class="f9-latino leading-none">
        acciones nobles jugando y disfrutando
      </p>
      <p class="f10-latino leading-none">el tiempo con tus seres queridos.</p>
    </div>
  </div>
</MagicTransition>
