<script lang="ts">
  export let hideText: boolean = false;
</script>

<!-- LOGO -->
<div class="h-[14vh] md:h-[15vh] p-[3vh] z-10">
  <img
    class="w-full h-full object-contain"
    alt="LOGO VIANNEY INVIERNO"
    src="/images/ELEMENTOS/LOGO-MORADO.webp"
  />
</div>

<!-- HEADER -->
{#if !hideText}
  <div class="text-ared z-10">
    <p class="f1-ivy leading-none">Calendario de Adviento</p>
    <p class="f2-baby leading-[3rem]">Angelitos 2024</p>
  </div>
{/if}
