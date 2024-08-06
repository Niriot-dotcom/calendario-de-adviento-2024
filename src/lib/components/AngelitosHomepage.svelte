<script lang="ts">
  export let isAngelitoFirst: boolean = false;
  export let firstPosition: "TOP" | "BOTTOM" | "CENTER" = "TOP";
  export let angelitosSize: string = "w-full";

  const classesByPosition = {
    TOP: {
      LEFT: "top-0 left-0",
      RIGHT: "bottom-0 right-0",
    },
    BOTTOM: {
      LEFT: "bottom-0 right-0",
      RIGHT: "top-0 left-0",
    },
    CENTER: {
      LEFT: "top-1/2 transform -translate-y-1",
      RIGHT: "top-1/2 transform -translate-y-1",
    },
  };
</script>

{#if isAngelitoFirst}
  <div class="relative h-full w-1/2">
    <div class="absolute {classesByPosition[firstPosition].LEFT}">
      <img
        class="{angelitosSize} h-full object-contain scale-x-flip"
        alt="ANGELITO"
        src="/images/PERSONAJES/ANGELITO.webp"
      />
    </div>
  </div>

  <div class="relative h-full w-1/2">
    <div
      class="absolute {classesByPosition[firstPosition]
        .RIGHT} w-full flex justify-end"
    >
      <img
        class="{angelitosSize} h-full object-contain"
        alt="ANGELITA"
        src="/images/PERSONAJES/ANGELITA.webp"
      />
    </div>
  </div>
{:else}
  <div class="relative h-full w-1/2">
    <div class="absolute {classesByPosition[firstPosition].LEFT}">
      <img
        class="{angelitosSize} h-full object-contain scale-x-flip"
        alt="ANGELITA"
        src="/images/PERSONAJES/ANGELITA.webp"
      />
    </div>
  </div>

  <div class="relative h-full w-1/2">
    <div class="absolute {classesByPosition[firstPosition].RIGHT}">
      <img
        class="{angelitosSize} h-full object-contain"
        alt="ANGELITO"
        src="/images/PERSONAJES/ANGELITO.webp"
      />
    </div>
  </div>
{/if}
