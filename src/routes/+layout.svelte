<script>
  import "../app.css";
  import MagicTransition from "$lib/transitions/MagicTransition.svelte";
  import Header from "$lib/components/Header.svelte";

  export let data;
</script>

<div class="app">
  <!-- <Header /> -->

  <main
    class="w-screen h-screen md:h-screen inner-div box-border overflow-y-hidden relative border-[12px] border-ared bg-cover flex flex-col text-center"
    style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
  >
    <MagicTransition key={data.url} duration={1000}>
      <slot />
    </MagicTransition>
  </main>
</div>
