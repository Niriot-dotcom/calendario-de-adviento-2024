<script lang="ts">
  export let boIndex: number;
  export let openModal: boolean;

  function openBuenaObra(index: number) {
    boIndex = index;
    openModal = true;
  }
</script>

<!-- GRID BUENAS OBRAS -->
<div class="flex space-x-5 w-[45vw] h-[80vh] z-10 mt-[5%]">
  <!-- IZQUIERDO -->
  <div class="grid grid-cols-1 grid-rows-6 w-[12vw] h-full z-10 green-400">
    <div></div>
    {#each [1, 12, 13, 23, 24] as number, i}
      <button
        on:click={() => openBuenaObra(number)}
        class="w-full h-full text-white font-bold relative"
      >
        {number}
        <div
          class="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <img
            class="object-contain"
            alt="step-4"
            src="/images/ELEMENTOS/ESTRELLA.webp"
          />
        </div>
      </button>
    {/each}
  </div>

  <!-- CENTER -->
  <div class="grid grid-cols-1 grid-rows-3 w-full h-full z-10 space-y-3">
    <div class="2 red-400 w-full h-full text-white font-bold grid grid-rows-2">
      <button
        on:click={() => openBuenaObra(3)}
        class="2 red-400 w-full h-full text-white font-bold"
      >
        3
      </button>

      <div class="2 red-400 w-full h-full text-white font-bold flex space-x-3">
        <button
          on:click={() => openBuenaObra(2)}
          class="2 red-400 w-1/2 h-full text-white font-bold text-right"
        >
          2
        </button>
        <button
          on:click={() => openBuenaObra(4)}
          class="2 red-400 w-1/2 h-full text-white font-bold text-left"
        >
          4
        </button>
      </div>
    </div>

    <div
      class="2 red-400 w-full h-full text-white font-bold grid grid-cols-4 grid-rows-2"
    >
      {#each [11, 10, 9, 8, 14, 15, 16, 17] as number, i}
        <button class="relative w-full h-full text-white font-bold">
          <div
            class="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="object-contain"
              alt="step-4"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        </button>
      {/each}
    </div>

    <div
      class="w-full h-full text-white font-bold grid grid-cols-3 grid-rows-1"
    >
      {#each [22, 25, 21] as number, i}
        <button
          class="2 red-400 w-full h-5/6 text-white font-bold {number === 25
            ? 'self-end'
            : ''}"
        ></button>
      {/each}
    </div>
  </div>

  <!-- DERECHO -->
  <div class="grid grid-cols-1 grid-rows-6 w-[12vw] h-full z-10 green-400">
    {#each [5, 6, 7, 18, 19, 20] as number, i}
      <button class="2 red-400 w-full h-full text-white font-bold relative">
        <div
          class="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <img
            class="object-contain"
            alt="step-4"
            src="/images/ELEMENTOS/ESTRELLA.webp"
          />
        </div>
      </button>
    {/each}
  </div>
</div>
