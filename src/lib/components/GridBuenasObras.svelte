<script lang="ts">
  import type { USER_SCHEMA } from "$lib/constants/db";
  import { AuthStore } from "../../stores/AuthStore";

  let currentDay = new Date().getDate();
  let nextAvailableDay: number;

  let dataFromUser: USER_SCHEMA;
  AuthStore.subscribe((curr) => {
    dataFromUser = curr?.data;
    console.log("dataFromUser: ", dataFromUser);
    nextAvailableDay = dataFromUser.lastDay + 1;
  });
</script>

<pre>
  {currentDay}
</pre>
<!-- GRID BUENAS OBRAS -->
<div class="flex space-x-8 w-[100vh] h-[80vh] z-10 mt-[8vh]">
  <!-- IZQUIERDO -->
  <div class="grid grid-cols-1 grid-rows-6 w-[25vh] h-full z-10">
    <div></div>
    {#each [1, 12, 13, 23, 24] as number, _}
      {#if number <= nextAvailableDay}
        <a href="/inicio/{number}" class="w-full h-full relative">
          <div
            class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="object-contain {number > dataFromUser.lastDay
                ? 'grayscale contrast-150 brightness-100 mix-blend-multiply'
                : ''}"
              alt="star"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        </a>
      {/if}
    {/each}
  </div>

  <!-- CENTER -->
  <div class="grid grid-cols-1 grid-rows-3 w-[110vh] h-full z-10 space-y-0">
    <div
      class="w-[30vh] h-2/3 place-self-center grid grid-rows-2 relative self-center"
    >
      {#if 3 <= nextAvailableDay}
        <a href="/inicio/3" class="w-full h-full relative self-end">
          <div
            class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="object-contain {3 > dataFromUser.lastDay
                ? 'grayscale contrast-150 brightness-100 mix-blend-multiply'
                : ''}"
              alt="star"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        </a>
      {/if}

      <div class="w-full h-full flex space-x-8">
        {#if 2 <= nextAvailableDay}
          <a href="/inicio/2" class="w-1/2 h-full relative">
            <div
              class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <img
                class="object-contain {2 > dataFromUser.lastDay
                  ? 'grayscale contrast-150 brightness-100 mix-blend-multiply'
                  : ''}"
                alt="star"
                src="/images/ELEMENTOS/ESTRELLA.webp"
              />
            </div>
          </a>
        {/if}

        {#if 4 <= nextAvailableDay}
          <a href="/inicio/4" class="w-1/2 h-full relative">
            <div
              class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <img
                class="object-contain {4 > dataFromUser.lastDay
                  ? 'grayscale contrast-150 brightness-100 mix-blend-multiply'
                  : ''}"
                alt="star"
                src="/images/ELEMENTOS/ESTRELLA.webp"
              />
            </div>
          </a>
        {/if}
      </div>
    </div>

    <div class="w-full h-full grid grid-cols-4 grid-rows-2">
      {#each [11, 10, 9, 8, 14, 15, 16, 17] as number, i}
        {#if number <= nextAvailableDay}
          <a href="/inicio/{number}" class="relative w-full h-full">
            <div
              class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <img
                class="object-contain {number > dataFromUser.lastDay
                  ? 'grayscale contrast-150 brightness-100 mix-blend-multiply'
                  : ''}"
                alt="star"
                src="/images/ELEMENTOS/ESTRELLA.webp"
              />
            </div>
          </a>
        {/if}
      {/each}
    </div>

    <div class="w-full h-full grid grid-cols-3 grid-rows-1 relative">
      {#each [22, 25, 21] as number, _}
        {#if number <= nextAvailableDay}
          <a
            href="/inicio/{number}"
            class="w-full h-5/6 relative {number === 25 ? 'self-end' : ''}"
          >
            <div
              class="{number === 25
                ? 'w-[10vh] h-[10vh]'
                : 'w-[8vh] h-[8vh]'} absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <img
                class="object-contain {number > dataFromUser.lastDay
                  ? 'grayscale contrast-150 brightness-100 mix-blend-multiply'
                  : ''}"
                alt="star"
                src="/images/ELEMENTOS/ESTRELLA.webp"
              />
            </div>
          </a>
        {/if}
      {/each}
    </div>
  </div>

  <!-- DERECHO -->
  <div class="grid grid-cols-1 grid-rows-6 w-[25vh] h-full z-10">
    {#each [5, 6, 7, 18, 19, 20] as number, i}
      {#if number <= nextAvailableDay}
        <a href="/inicio/{number}" class="w-full h-full relative">
          <div
            class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="object-contain {number > dataFromUser.lastDay
                ? 'grayscale contrast-150 brightness-100 mix-blend-multiply'
                : ''}"
              alt="star"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        </a>
      {/if}
    {/each}
  </div>
</div>
