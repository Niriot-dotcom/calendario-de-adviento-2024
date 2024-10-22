<script>
  import StarsTransition from "$lib/transitions/StarsTransition.svelte";
</script>

<svelte:head>
  <title>Calendario de Adviento</title>
  <meta name="description" content="Calendario de Adviento 2024 | Vianney" />
</svelte:head>

<StarsTransition duration={1000}>
  <slot />
</StarsTransition>
