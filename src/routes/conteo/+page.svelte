<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import LaMagiaCopy from "$lib/components/LaMagiaCopy.svelte";
  import TimeRemaining from "$lib/components/TimeRemaining.svelte";
  import { areThereDaysLeft } from "$lib/utils/getRemainingTime";

  let testingHours = true;
</script>

<div
  class="w-screen h-[94vh] inner-div box-border overflow-y-hidden relative border-[28px] border-ared bg-cover flex flex-col text-center"
  style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
>
  <!-- HEADER & LOGO -->
  <HeaderAndLogo />

  <!-- SUBTITLE -->
  <LaMagiaCopy />

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

  <!-- FALTAN Y DEMAS TEXTOS -->
  <div class="absolute flex flex-col bottom-0 w-full h-[40vh]">
    <p class="font-ivy text-3xl text-agreen">¡Hola Fany!</p>

    {#if !areThereDaysLeft(testingHours)}
      <div class="font-latino-35 mt-5 text-ared">
        <p class="text-xl leading-none">La espera está por terminar</p>
        <p class="font-ivy text-3xl leading-none">¡Nos vemos mañana!</p>
      </div>
    {/if}

    <TimeRemaining bind:testingHours />

    {#if areThereDaysLeft(testingHours)}
      <div class="font-latino-35 my-3 text-ared">
        <p class="text-xl leading-none">para conocer nuestro</p>
        <p class="font-ivy text-3xl leading-none">
          Calendario de Adviento 2024
        </p>
      </div>
    {/if}

    <!-- FOOTER -->
    <div class="font-latino-35 my-5 text-ared">
      <p class="text-lg leading-none">
        Con nuestro calendario <span class="font-bold">realizarás</span>
      </p>
      <p class="font-bold text-lg leading-none">
        acciones nobles jugando y disfrutando
      </p>
      <p class="text-lg leading-none">el tiempo con tus seres queridos.</p>
    </div>

    <!-- TODO remove -->
    <button on:click={() => (testingHours = !testingHours)}>
      Test horas faltantes
    </button>
  </div>
</div>
