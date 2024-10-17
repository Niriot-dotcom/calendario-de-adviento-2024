<script>
  import StarsTransition from "$lib/transitions/StarsTransition.svelte";
</script>

<svelte:head>
  <title>Calendario de Adviento</title>
  <meta name="description" content="Calendario de Adviento 2024 | Vianney" />
</svelte:head>

<div class="app">
  <main
    class="z-0 w-screen h-screen landscape:h-screen inner-div box-border overflow-hidden relative bg-cover flex flex-col text-center"
    style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
  >
    <StarsTransition duration={1000}>
      <slot />
    </StarsTransition>
  </main>
</div>
