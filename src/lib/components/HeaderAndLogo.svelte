<script lang="ts">
  export let hideText: boolean = false;
</script>

<!-- LOGO -->
<div class="h-[7vh] md:h-[10vh] my-[1vh] z-10">
  <img
    class="w-full h-full object-contain"
    alt="LOGO VIANNEY INVIERNO"
    src="/images/ELEMENTOS/LOGO-MORADO.webp"
  />
</div>

<!-- HEADER -->
{#if !hideText}
  <div class="z-10">
    <p class="text-ared f1-ivy leading-none">Calendario de Adviento</p>
    <p
      class="text-ared f2-baby leading-[3rem] md:leading-[3rem] lg:leading-[3rem]"
    >
      Angelitos 2024
    </p>
  </div>
{/if}
