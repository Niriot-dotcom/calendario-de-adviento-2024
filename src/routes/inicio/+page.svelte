<script lang="ts">
  import GridBuenasObras from "$lib/components/GridBuenasObras.svelte";
  import LateralMenu from "$lib/components/LateralMenu.svelte";
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
  let boIndex: number = -1;
  let openModal: boolean = false;
</script>

<!-- {#if openModal && boIndex >= 1 && boIndex <= 25}
  <BuenaObra BO_INDEX={boIndex} {openModal} />
{:else} -->
<div
  class="w-screen h-[100dvh] bg-no-repeat md:h-[100dvh] inner-div box-border overflow-hidden relative flex flex-col text-center items-center justify-center"
>
  <!-- BACKGROUND TEXTURE -->
  <div
    class="w-full h-[100dvh] md:h-[100dvh] absolute inner-div box-border overflow-y-hidden bg-cover opacity-90 mt-12"
    style="background: url('/images/FONDOS/CASA.webp') no-repeat; float: left; background-size: 100vw; background-size: cover; background-position: center; scale: 140%;"
  />

  <!-- LOGO -->
  <WhiteLogo />

  <!-- MENU BUTTON -->
  <LateralMenu />

  <!-- GRID BUENAS OBRAS -->
  <GridBuenasObras bind:boIndex bind:openModal />

  <!-- Stars -->
</div>
<!-- {/if} -->
