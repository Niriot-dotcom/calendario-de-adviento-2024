<script lang="ts">
  export let nextRoute: string;
</script>

<a
  href={nextRoute}
  class="absolute bottom-3 right-3 z-50 w-fit h-[5vh] landscape:h-[10vh]"
>
  <img
    class="h-full object-contain"
    alt="next-button"
    src="/images/ELEMENTOS/BOTON.webp"
  />
</a>
