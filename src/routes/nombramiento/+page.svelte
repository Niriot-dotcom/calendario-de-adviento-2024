<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import LaMagiaCopy from "$lib/components/LaMagiaCopy.svelte";
  import TimeRemaining from "$lib/components/TimeRemaining.svelte";
  import { areThereDaysLeft } from "$lib/utils/getRemainingTime";

  let testingHours = true;
</script>

<div
  class="w-screen h-[94vh] md:h-screen inner-div box-border overflow-y-hidden relative border-[28px] border-ared bg-cover flex flex-col text-center"
  style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
>
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
    <div class="font-latino-35 my-5 text-agreen">
      <p class="text-lg leading-none">Para comenzar nombra a tus Angelitos,</p>
      <p class="text-lg leading-none">
        ellos <span class="font-bold">te acompañarán durante el Adviento.</span>
      </p>
    </div>

    <!-- TEXT FIELDS -->
    <div
      class="flex flex-col space-y-5 w-full items-center justify-center text-agreen"
    >
      <!-- ANGELITA -->
      <div class="flex flex-col md:w-2/6">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="text-xl text-nowrap">Nombra a tu Angelita:</label>
        <input name="nombre-angelita" class="bg-white rounded-full px-3 py-1" />
      </div>

      <!-- ANGELITO -->
      <div class="flex flex-col md:w-2/6">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="text-xl text-nowrap">Nombra a tu Angelito:</label>
        <input name="nombre-angelita" class="bg-white rounded-full px-3 py-1" />
      </div>
    </div>
  </div>
</div>
