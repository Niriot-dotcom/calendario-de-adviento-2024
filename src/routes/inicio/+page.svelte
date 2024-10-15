<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import GridBuenasObras from "$lib/components/GridBuenasObras.svelte";
  import LateralMenu from "$lib/components/LateralMenu.svelte";
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
  import StarsTransition from "$lib/transitions/StarsTransition.svelte";

  // TODO get from the DB
  // let untilDate = new Date().getDate();
  // let userData = {
  //   lastDayCompleted: 3,
  // };
</script>

<!-- {#if $AuthStore.currentUser} -->
<StarsTransition duration={1000}>
  <div
    class="portrait:hidden flex w-screen h-screen bg-no-repeat inner-div box-border overflow-hidden relative flex-col text-center items-center justify-center"
  >
    <!-- BACKGROUND TEXTURE -->
    <div
      class="w-full h-screen absolute inner-div box-border overflow-y-hidden bg-cover opacity-90"
      style="background: url('/images/FONDOS/CASA.webp') no-repeat; float: left; background-size: 100vh; background-size: cover; background-position: center; scale: 100%;"
    />

    <!-- LOGO -->
    <WhiteLogo />

    <!-- MENU BUTTON -->
    <LateralMenu />

    <!-- GRID BUENAS OBRAS -->
    <GridBuenasObras />

    <!-- Stars -->
  </div>

  <!-- mobile with advice -->
  <!-- <div class="landscape:hidden">
    <div
      class="flex absolute justify-between w-full h-[35vh] top-[40%] transform -translate-y-[40%]"
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
      <div class="f5-latino my-5 text-agreen">
        TODO svg of a phone rotated to simulate rotation
        <p class="leading-none">Voltea tu celular de manera horizontal</p>
        <p class="leading-none">para una mejor experiencia</p>
      </div>
    </div> -->

  <!-- mobile with buenas obras -->
  <div class="landscape:hidden w-full h-full">
    <div class="w-full h-[35vh] overflow-hidden">
      <img
        src="/images/FONDOS/CASA.webp"
        alt="CASA"
        class="h-full object-cover"
      />
    </div>

    <div class="flex flex-col w-full">
      <div class="f5-latino my-5 text-agreen">
        <!-- TODO svg of a phone rotated to simulate rotation -->
        <p class="leading-none">Voltea tu celular de manera horizontal</p>
        <p class="leading-none">para una mejor experiencia</p>
      </div>
    </div>

    <div
      class="w-11/12 h-full grid grid-cols-5 grid-rows-5 gap-3 place-content-center place-items-center overflow-y-scroll"
    >
      {#each { length: 25 } as _, i}
        <a
          href="/inicio/{i + 1}"
          class="w-14 h-14 border border-red-400 relative"
        >
          {i + 1}

          <div
            class="w-[4vh] h-[4vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="object-contain"
              alt="star"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        </a>
      {/each}
    </div>
  </div>
</StarsTransition>

<!-- {:else}
  <div>Loading....</div>
{/if} -->

<style>
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
