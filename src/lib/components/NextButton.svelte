<script lang="ts">
  export let nextRoute: string;
  export let prevAction: () => void = () => {
    return;
  };
</script>

<a
  on:click={prevAction}
  href={nextRoute}
  class="absolute bottom-8 right-6 z-50 w-fit h-[5vh] landscape:h-[10vh]"
>
  <img
    class="h-full object-contain"
    alt="next-button"
    src="/images/ELEMENTOS/BOTON.webp"
  />
</a>
