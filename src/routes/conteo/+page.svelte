<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import LaMagiaCopy from "$lib/components/LaMagiaCopy.svelte";
  import NotificationInput from "$lib/components/NotificationInput.svelte";
  import TimeRemaining from "$lib/components/TimeRemaining.svelte";
  import { areThereDaysLeft } from "$lib/utils/getRemainingTime";

  let testingHours = false;
</script>

<div
  class="w-screen h-[100vh] z-10 inner-div box-border overflow-y-hidden relative border-[12px] border-ared bg-cover flex flex-col text-center"
  style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
>
  <!-- HEADER & LOGO -->
  <HeaderAndLogo hideText />

  <!-- SUBTITLE -->
  <LaMagiaCopy />

  <!-- ANGELITOS -->
  <div
    class="absolute z-0 flex justify-between w-full h-[38vh] top-[32%] transform -translate-y-[40%]"
  >
    <AngelitosHomepage
      isAngelitoFirst
      firstPosition="TOP"
      angelitosSize="w-5/6"
    />
  </div>

  <!-- FALTAN Y DEMAS TEXTOS -->
  <div class="absolute flex flex-col bottom-0 w-full z-10">
    <!-- TODO make available when register is enabled -->
    <!-- {#if !areThereDaysLeft(testingHours)}
      <div class="mt-5 text-ared">
        <p class="f4-latino leading-none">La espera está por terminar</p>
        <p class="f3-ivy leading-none">¡Nos vemos mañana!</p>
      </div>
    {/if}

    <TimeRemaining bind:testingHours />

    {#if areThereDaysLeft(testingHours)}
      <div class="my-3 text-ared">
        <p class="f4-latino leading-none">para conocer nuestro</p>
        <p class="f3-ivy leading-none">Calendario de Adviento 2024</p>
      </div>
    {/if} -->

    <TimeRemaining bind:testingHours />

    <div class="mb-2 text-ared">
      <p class="f4-latino leading-none">para conocer nuestro</p>
      <p class="f1-ivy leading-none">Calendario de Adviento 2024</p>
      <p class="f10-latino leading-none text-agreen mt-1">
        Disponible a partir del
      </p>
      <p class="f10-latino leading-none text-agreen">1 de Diciembre del 2024</p>
    </div>

    <!-- FOOTER -->
    <div class="my-8 text-ared">
      <p class="f10-latino leading-none">
        Con nuestro calendario <span class="f9-latino">realizarás</span>
      </p>
      <p class="f9-latino leading-none">
        acciones nobles jugando y disfrutando
      </p>
      <p class="f10-latino leading-none">el tiempo con tus seres queridos.</p>
    </div>

    <!-- RECIBIR NOTIFICACIONES -->
    <NotificationInput />

    <!-- TODO remove -->
    <!-- <button on:click={() => (testingHours = !testingHours)}>
      Test horas faltantes
    </button> -->
  </div>
</div>
